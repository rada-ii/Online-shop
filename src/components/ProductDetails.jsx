import React from "react";

const ProductDetails = ({ product }) => (
  <div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <p>Category: {product.category}</p>
  </div>
);

export default ProductDetails;
