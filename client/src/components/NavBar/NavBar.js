import { Fragment, useState, useEffect } from "react";
import "./NavBar.css";

function NavBar(props) {
  const loggedIn = localStorage.getItem("loggedIn");

  // useEffect(() => {
  //   console.log("Navbar", props);
  // }, [loggedIn]);

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
            {loggedIn === "false" ? (
              <li>
                <a href="/login">Log In</a>
              </li>
            ) : (
              <li>
                <a href="/myprofile">My Profile</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;