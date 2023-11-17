import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../../components/ProductsList/ProductsList";
import Pagination from "../../components/Pagination/Pagination";
import { extractUniqueCategories } from "../../utils";
import Search from "../../filters/Search";
import Filter from "../../filters/Filter";
import Sort from "../../filters/Sort";

const AllProducts = ({ addToCart, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [sortedProducts, setSortedProducts] = useState([]);
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

        const sortedItems = sortProducts(items, sortOrder);
        setSortedProducts(sortedItems);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, [sortOrder]);

  const sortProducts = (items, order) => {
    if (order === "asc") {
      return items.slice().sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      return items.slice().sort((a, b) => b.price - a.price);
    } else {
      return items;
    }
  };

  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex justify-between mt-8 mb-12 mx-4">
        <Search handleSearch={handleSearch} />
        <Sort handleSortOrderChange={handleSortOrderChange} />
        <Filter
          handleCategoryChange={handleCategoryChange}
          categories={extractUniqueCategories(products)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p>There are no results for this search. Please try again.</p>
      ) : (
        <div>
          <ProductsList products={currentProducts} addToCart={addToCart} />
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
