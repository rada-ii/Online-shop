import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import { extractUniqueCategories } from "./utils";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/products.json", {
          headers: {
            Origin: window.location.hostname,
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        const items = response.data.products.data.items;

        setProducts(items);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    sortProducts();
  }, [sortOrder, products]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    updateCartCount(cart.length + 1);
  };

  const removeFromCart = (productId) => {
    let oldCart = cart;
    let cartForRemoval = cart.filter((item) => item.id === productId)[0];
    let index = cart.indexOf(cartForRemoval);
    if (index > -1) {
      oldCart.splice(index, 1);
    }
    setCart(oldCart);
    updateCartCount(cart.length);
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order === "default" ? "" : order);
  };

  const sortProducts = () => {
    console.log("Sorting products...");
    const sorted = [...products];

    if (sortOrder !== "default") {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, "")) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, "")) || 0;

        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
      });
    }

    setSortedProducts(sorted);
  };

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
        handleSortOrderChange={handleSortOrderChange}
        categories={extractUniqueCategories(products)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              addToCart={addToCart}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              products={sortedProducts}
            />
          }
        />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
