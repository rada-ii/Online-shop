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
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {loading && <p>Loading product details...</p>}
      {error && <p>Error: {error}</p>}
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductDetailsPage;
