import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <Link className="navlink" to="/">
            <li>Home</li>
          </Link>
          <Link className="navlink right-menu " to="/about">
            <li>About Us</li>
          </Link>
          <Link className="navlink" to="/signin">
            <li>Sign in</li>
          </Link>
          <Link className="navlink" to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
