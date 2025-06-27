import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Work
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/writings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Writings
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="mailto:n01697226@humber.ca" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
