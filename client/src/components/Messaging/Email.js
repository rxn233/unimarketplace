import React, { useState } from "react";
import email_style from "./Email.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

function Email(props) {
  const userId = localStorage.getItem("user_id");
  console.log("Email", props.recipient);
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function submitHandler() {
    axios
      .post("http://localhost:3001/email", {
        user_email: userId,
        recipient: props.recipient,
        message: message,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.flag === "y") {
          console.log(response.data);
          navigate("/");
        } else {
          setErrorMessage(response.data.error);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function cancelHandler() {
    navigate("/");
  }

  return (
    <div>
      {userId === "" ? (
        <h3>Please login first to email the seller..!</h3>
      ) : (
        <div className={email_style["email-box"]}>
          <h2>Contact the Seller</h2>
          <h3>{errorMessage}</h3>
          <div className={email_style["email-details"]}>
            <form onSubmit={submitHandler}>
              <label htmlFor="message">
                <b>Message: </b>
              </label>
              <input
                name="message"
                id="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
              <button type="submit">Send</button>
              <button onClick={cancelHandler}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Email;
