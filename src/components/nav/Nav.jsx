import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import "./nav.scss";

const Nav = ({ color = "#fff", invertLogo = false }) => {
  return (
    <nav className="navbar" style={{ "--nav-color": color }}>
      <ul>
        <li>
          <img
            src={logo}
            alt="logo"
            className="nav_logo"
            style={{ filter: invertLogo ? "invert(1)" : "none" }}
          />
          <Link to="/">Coffee house</Link>
        </li>
        <li>
          <Link to="/coffee">Our coffee</Link>
        </li>
        <li>
          <Link to="/goods">For your pleasure</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
