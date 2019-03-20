import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar(){
  return (
    <nav className="navbar">
      <img src={logo} alt="City tours logo" />
      <ul className="nav-ul-links">
          <li>
              <a href="/" className="nav-link">
                  Home
            </a>
          </li>
          <li>
              <a href="/" className="nav-link">
                  about
            </a>
          </li>
          <li>
              <a href="/" className="nav-link">
                  tours
            </a>
          </li>
      </ul>
    </nav>
  );
}
