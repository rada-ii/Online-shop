import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const apiUrl = `/api/products/${id}.json`; // Make sure this endpoint is correct
      console.log("Fetching product details from:", apiUrl);

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        console.log("Response data:", response.data);

        // Ensure you are accessing the correct properties from the API response
        const productData = response.data.products.data.items[0]; // Adjust this based on your API response structure
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

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
