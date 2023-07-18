import React, { Fragment, useState } from "react";
import "./Login.css";

function Login() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  function nameChangeHandler(event) {
    console.log("Name");
    setEnteredUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    console.log("Password changed");
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(enteredUsername, enteredPassword);
  }

  return (
    <div className="main-login">
      <form onSubmit={submitHandler} className="login-form">
        <h1>Login</h1>
        <div className="form-input-material">
          <input
            onChange={nameChangeHandler}
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-input-material">
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
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
