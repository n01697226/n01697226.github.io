import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
