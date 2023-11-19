import React from "react";

const ProductDetails = ({ product }) => (
  <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between w-1/2 mx-auto mb-20">
    <h2 className="text-center mb-2 font-semibold text-indigo-500">
      {product.name}
    </h2>

    {product.images && product.images.length > 0 && (
      <img
        src={product.images[0]}
        alt={`${product.name}-0`}
        className="w-1/2 h-60 object-cover mb-4 rounded-md mx-auto"
      />
    )}

    <p>
      <span className="text-indigo-500">Description: </span>
      {product.description}
    </p>
    <p>
      <span className="text-indigo-500">Price:</span> ${product.price}
    </p>
    <p>
      <span className="text-indigo-500">Category:</span> {product.category}
    </p>
  </div>
);

export default ProductDetails;
