import React from "react";

const Sort = ({ handleSortOrderChange }) => (
  <div className="text-gray-600">
    <label htmlFor="sortOrder">Sort by Price: </label>
    <select
      id="sortOrder"
      onChange={(e) => handleSortOrderChange(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
);

export default Sort;
