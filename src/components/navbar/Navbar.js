import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <a href="mailto:n01697226@humber.ca" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
