import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import { extractUniqueCategories } from "./utils";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default"); // or use an empty string
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
        console.log("Product Items:", items);
        setProducts(items);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Products before sorting:", products);
    sortProducts();
  }, [sortOrder, products]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    updateCartCount(cart.length + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    updateCartCount(updatedCart.length);
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

    console.log("Sorted Products:", sorted);

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
