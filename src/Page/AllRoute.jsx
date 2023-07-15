import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default AllRoute;
