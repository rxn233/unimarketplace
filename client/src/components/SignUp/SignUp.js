import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    // const dataForLogin = { enteredEmail, enteredPassword };

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

    props.onSignup(formData);
    navigate("/verify");

    //   axios
    //     .post(`http://localhost:3001/signup`, formData, {
    //       headers: { "Content-Type": "application/json" },
    //     })
    //     .then(function (response) {
    //       console.log(response.data);
    //       if (response.data.flag === "y") {
    //         localStorage.setItem("loggedIn", true);
    //         // props.onLogin(dataForLogin);
    //         localStorage.setItem("user_id", response.data.user_id);
    //         navigate("/verify");
    //       } else {
    //         setErrorMessage(response.data.error);
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log("Error in signup");
    //     });
    // }
  }

  return (
    <div>
      <h2>SignUp</h2>
      <h4>{errorMessage}</h4>
      <form onSubmit={submitHandler} className="login-form">
        <div>
          <label htmlFor="name">Your Name: </label>
          <input onChange={nameHandler} type="text" id="name" name="username" />
        </div>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input onChange={emailHandler} type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Enter Password: </label>
          <input
            onChange={passwordHandler}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>
        Go back to <a href="/login">Login</a>
      </h2>
    </div>
  );
}

export default SignUp;
