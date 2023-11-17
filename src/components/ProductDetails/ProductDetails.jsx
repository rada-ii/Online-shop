import React from "react";

const ProductDetails = ({ product }) => (
  <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between mx-10">
    <img
      src={product.images[0]}
      alt={`${product.name}-0`}
      className="w-full h-1/4  object-cover mb-4 rounded-md"
    />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <p>Category: {product.category}</p>
  </div>
);

export default ProductDetails;
