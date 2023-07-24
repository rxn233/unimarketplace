import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("false");
  const navigate = useNavigate();

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = { enteredEmail, enteredPassword, loggedIn };
    console.log("Submitted");
    console.log(formData);

    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        if (data === "y") {
          setLoggedIn("true");
          props.onLogin(formData);
          navigate("/");
        } else {
          console.log(data);
        }
        // localStorage.setItem("loggedIn", true);
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
            // autoComplete="off"
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
      <h2>Create an account</h2>
      <a href="/signup">SignUp</a>
    </div>
  );
}

export default Login;
