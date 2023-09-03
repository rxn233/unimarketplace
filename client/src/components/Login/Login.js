import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
import styles from "./Login.module.css";

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

    console.log(errorMessage);
  }

  return (
    <div className={styles["login-box"]}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <h3>{errorMessage}</h3>
        <div className={styles["login-user-box"]}>
          <input
            onChange={emailChangeHandler}
            type="text"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles["login-user-box"]}>
          <input
            onChange={passwordChangeHandler}
            type="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <button className={styles["login-register"]}>
        <a href="/signup">Not a User? Register</a>
      </button>
    </div>
  );
}

export default Login;
