import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Verify(props) {
  const navigate = useNavigate();
  console.log("Verify section", props.signupData);
  const { enteredEmail, enteredName, enteredPassword } = props.signupData;
  const [code, setCode] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  function codeChangeHandler(event) {
    setCode(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const dataForLogin = { enteredEmail, enteredPassword };
    axios
      .post("http://localhost:3001/verify", {
        enteredName: enteredName,
        enteredEmail: enteredEmail,
        enteredPassword: enteredPassword,
        enteredCode: code,
      })
      .then(function (response) {
        console.log("Verification", response.data);
        if (response.data.flag === "y") {
          localStorage.setItem("loggedIn", true);
          props.onLogin(dataForLogin);
          localStorage.setItem("user_id", response.data.user_id);
          navigate("/");
        } else {
          setErrorMessage(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("Verification error", error);
      });
  }

  return (
    <div>
      <h2>Verify</h2>
      <h3>{errorMessage}</h3>
      <h3>Entered Email: {enteredEmail}</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="verify_code">Enter the verification code: </label>
        <input onChange={codeChangeHandler} type="number" id="verify_code" />
        <button type="submit">Verify the code</button>
      </form>
    </div>
  );
}
export default Verify;
