// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="product-details/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
