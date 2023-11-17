import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("/api/products.json");

        const product = response?.data.products.data.items.find(
          (item) => item.id === id
        );

        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-950 my-8 text-center"
      >
        Go Back
      </button>
      {loading && (
        <p className="text-semibold text-gray-700 text-center">
          Loading product details...
        </p>
      )}
      {error && <p>Error: {error}</p>}
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductDetailsPage;
