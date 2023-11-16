// pages/AllProducts.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";
import Pagination from "../components/Pagination";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ProductsList products={currentProducts} />
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllProducts;
