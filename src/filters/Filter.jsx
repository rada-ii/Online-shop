import React from "react";

const Filter = ({ handleCategoryChange, categories }) => (
  <div className="text-gray-600">
    <label htmlFor="category">Filter by Category: </label>
    <select id="category" onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default Filter;
