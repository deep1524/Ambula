import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let cartLs = JSON.parse(localStorage.getItem("cart_page")) || [];
  return (
    <div className="flex justify-around mt-5">
      <Link className="text-2xl" to="/Home">
        Home
      </Link>
      <Link className="text-2xl " to="/About">
        About
      </Link>
      <Link className="text-2xl " to="/Contact">
        Contact
      </Link>
      <Link className="text-2xl " to="/Cart">
        Cart {cartLs.length}
      </Link>
    </div>
  );
};

export default Navbar;
