import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav = () => {
  const [navigation, setNavigation] = useState(false);
  const handleNavClick = () => setNavigation(!navigation);
  return !navigation ? (
    <div className="navBtn" onClick={handleNavClick}>
      <i class="fa-sharp fa-solid fa-bars"></i>
    </div>
  ) : (
    <nav className="nav">
      <ul onClick={handleNavClick}>
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
