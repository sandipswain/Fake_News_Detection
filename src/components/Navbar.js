import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        Fake News Detection
      </NavLink>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/prediction">Prediction</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li className="navLink">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default Navbar;
