import React, { useState } from "react";

function SignUp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function nameHandler(event){
    setEnteredName(event.target.value);

  }

  function emailHandler(event){
    setEnteredEmail(event.target.value);
}
  

  function passwordHandler(event){
setEnteredPassword(event.target.value);
}
  
  function submitHandler(event) {
    event.preventDefault();
    console.log(enteredName, enteredEmail, enteredPassword);
  }

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={submitHandler} className="login-form">
        <div>
          <label htmlFor="name">Your Name: </label>
          <input onChange = {nameHandler} type="text" id="name" name="username" />
        </div>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input onChange={emailHandler} type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Enter Password: </label>
          <input onChange={passwordHandler} type="password" id="password" name="password" />
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
