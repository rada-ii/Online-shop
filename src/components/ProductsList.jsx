import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 mt-8">
    {Array.isArray(products) && products.length > 0 ? (
      products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
);

export default ProductsList;
