import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup_styles from "./SignUp.module.css";

function SignUp(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const navigate = useNavigate();

  function nameHandler(event) {
    setEnteredName(event.target.value);
    setErrorMessage("");
  }

  function emailHandler(event) {
    setEnteredEmail(event.target.value);
    setErrorMessage("");
  }

  function passwordHandler(event) {
    setEnteredPassword(event.target.value);
    setErrorMessage("");
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = { enteredName, enteredEmail, enteredPassword };

    axios
      .get("http://localhost:3001/signup", {
        params: { enteredEmail: enteredEmail },
      })
      .then(function (response) {
        if (response.data.flag === "y") {
          props.onSignup(formData);
          console.log("signup check completed");
          navigate("/verify");
        } else {
          setErrorMessage(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("Error in signup data fetch", error);
      });
  }

  return (
    <div className={signup_styles["signup-box"]}>
      <h2>Signup</h2>
      <form onSubmit={submitHandler}>
        <h3>{errorMessage}</h3>
        <div className={signup_styles["signup-user-box"]}>
          <input
            onChange={nameHandler}
            type="text"
            id="name"
            name="username"
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>
        <div className={signup_styles["signup-user-box"]}>
          <input
            onChange={emailHandler}
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={signup_styles["signup-user-box"]}>
          <input
            onChange={passwordHandler}
            type="password"
            id="password"
            name="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Create Account</button>
        <button>
          <a href="/login">Have an account? Sign in</a>
        </button>
      </form>
    </div>
  );
}

export default SignUp;
