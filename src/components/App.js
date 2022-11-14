import React from "react";
import { Nav } from "./Nav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "../views/About";
import { Menu } from "../views/Menu";
import { Contact } from "../views/Contact";
import { Cart } from "../views/Cart";
import { Home } from "../views/Home";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
