import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Fake News Detection
      </a>
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/prediction">Prediction</CustomLink>
        <CustomLink href="/about">About Us</CustomLink>
        <CustomLink href="/contact">Contact Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

export default Navbar;
