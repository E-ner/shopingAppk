import { ShoppingCart } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black flex flex-col p-3">
      <div className="self-end flex">
        <Link to="/" className="text-white mr-4">
          Shop
        </Link>
        <Link to="/cart" className="text-white">
          <ShoppingCart size={23} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
