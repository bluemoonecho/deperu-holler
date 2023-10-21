// Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

function Navigation({ isOpen, closeMenu }) {
  return function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return (
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  };
}

export default Navigation;
