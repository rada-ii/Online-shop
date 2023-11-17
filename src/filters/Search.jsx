import { FileSearch } from "phosphor-react";
import React from "react";

const Search = ({ handleSearch }) => (
  <div className="flex justify-stretch text-gray-600">
    <FileSearch size={32} weight="fill" className=" text-indigo-200" />
    <input
      className=" outline-none border-b"
      type="text"
      placeholder="Search products"
      onChange={handleSearch}
    />
  </div>
);

export default Search;
