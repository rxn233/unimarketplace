import { Fragment } from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="company-name">UniMarketPlace</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sell">List a Product</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/messages">Messages</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
