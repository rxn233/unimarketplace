import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function emailChangeHandler(event) {
    console.log("Name");
    setEnteredEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    console.log("Password changed");
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(enteredEmail, enteredPassword);
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      body: JSON.stringify({ enteredEmail, enteredPassword }),
    })
      .then((response) => {
        response.json();
        console.log(response.json());
      })
      .then((data) => {
        setLoggedIn(true);
        console.log("Logged in");
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  return (
    <div className="main-login">
      <form onSubmit={submitHandler} className="login-form">
        <h1>Login</h1>
        <div className="form-input-material">
        <label htmlFor="email">Email</label>
          <input
            onChange={emailChangeHandler}
            type="text"
            name="email"
            id="email"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          
        </div>
        <div className="form-input-material">
        <label htmlFor="password">Password</label>
          <input
            onChange={passwordChangeHandler}
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          
        </div>
        <button type="submit" className="btn btn-primary btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
