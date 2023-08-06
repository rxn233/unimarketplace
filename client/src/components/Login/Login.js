import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setErrorMessage("");
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    setErrorMessage("");
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted");

    axios
      .get(`http://localhost:3001/login`, {
        params: {
          enteredEmail: enteredEmail,
          enteredPassword: enteredPassword,
        },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.flag === "y") {
          props.onLogin(response.data.userData);
          console.log(response.data.userData.user_id);
          localStorage.setItem("user_id", response.data.userData.user_id);
          navigate("/");
        } else {
          setErrorMessage(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("Error");
      });
  }

  return (
    <div className="main-login">
      <form onSubmit={submitHandler} className="login-form">
        <h1>Login</h1>
        <h3>{errorMessage}</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={emailChangeHandler}
            type="text"
            name="email"
            id="email"
            placeholder=" "
            // autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={passwordChangeHandler}
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h2>Create an account</h2>
      <a href="/signup">SignUp</a>
    </div>
  );
}

export default Login;
