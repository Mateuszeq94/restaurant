import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="navList">
          <Link to="/">Home</Link>
        </li>
        <li className="navList">
          <Link to="/about">About</Link>
        </li>
        <li className="navList">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="navList">
          <Link to="contact">Contact</Link>
        </li>
        <li className="navList">
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
