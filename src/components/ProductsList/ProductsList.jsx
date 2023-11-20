
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({ products, addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 mt-8">
    {Array.isArray(products) && products.length > 0 ? (
      products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))
    ) : (
      <p>Loading ...</p>
    )}
  </div>
);

export default ProductsList;
