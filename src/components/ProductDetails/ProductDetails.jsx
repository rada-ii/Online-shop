import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={handleGoBack}
        className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-950 mb-4 transition duration-200"
      >
        Go Back
      </button>
      <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between w-1/2 mx-auto mb-20">
        <h2 className="text-center mb-2 font-semibold text-indigo-500">
          {product.name}
        </h2>

        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={`${product.name}-0`}
            className="w-1/2 h-60 object-cover mb-4 rounded-md mx-auto"
          />
        ) : (
          <p className="text-center text-gray-500 text-xl my-8">
            No images available
          </p>
        )}

        <p>
          <span className="text-indigo-500">Description:</span>
          {product.description}
        </p>
        <p>
          <span className="text-indigo-500">Price:</span> ${product.price}
        </p>
        <p>
          <span className="text-indigo-500">Category:</span> {product.category}
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
