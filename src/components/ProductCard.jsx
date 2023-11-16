// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
    {product.images && product.images.length > 0 ? (
      <img
        src={product.images[0]}
        alt={`${product.name}-0`}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
    ) : (
      <p className="text-center text-gray-500 text-xl mb-36">
        No image available
      </p>
    )}

    <h2 className="font-semibold text-xl text-indigo-400">{product.name}</h2>
    <p className="text-gray-600 mt-4">${product.price}</p>

    {/* Ensure the correct product ID is passed to the Link component */}
    <Link to={`/product-details/${product.id}`}>
      <button className="mt-4 bg-indigo-500 text-white p-2 rounded-md">
        View Details
      </button>
    </Link>
  </div>
);

export default ProductCard;