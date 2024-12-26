import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <header className="navbar ">
        <h4>FURNI</h4>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>About US</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/"}>Blog</Link>
        </li>
        <li>
          <Link to={"/"}>Contact Us</Link>
        </li>
        <li className="icons">
          <Link to={"/"}  className="fas fa-user">log in</Link>
        </li>
        <li className="icons">
          <Link to={"/"}  className="fas fa-shopping-cart" > cart</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;