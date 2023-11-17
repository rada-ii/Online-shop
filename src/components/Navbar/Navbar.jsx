import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = ({ cartCount }) => (
  <div className="flex items-center justify-between px-6 py-4 bg-indigo-300 text-white ">
    <Link to="/">
      <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-950">
        All products
      </button>
    </Link>
    <Link to="/cart" className="flex items-center  hover:text-indigo-950">
      <ShoppingCart size={32} />
      {cartCount > 0 && <span className="ml-4">{cartCount}</span>}
    </Link>
  </div>
);

export default Navbar;
