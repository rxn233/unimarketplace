import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import NavBar from "./components/NavBar/NavBar";
import Sell from "./components/Sell/Sell";
import SignUp from "./components/SignUp/SignUp";
import Verify from "./components/SignUp/Verify";
import Messaging from "./components/Messaging/Messaging";
import CreateListing from "./components/Sell/CreateListing";
import EditProfile from "./components/MyProfile/EditProfile";
import Email from "./components/Messaging/Email";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const [signupData, setSignupData] = useState({});
  const [recipientMessageData, setRecipientMessageData] = useState();
  const [recipientEmailData, setRecipientEmailData] = useState();

  if (localStorage.getItem("loggedIn") === null) {
    localStorage.setItem("loggedIn", false);
  }

  function loginDataHandler(loginData) {
    // console.log("App", loginData);
    localStorage.setItem("loggedIn", true);
    setUserInfo(loginData);
    setLoggedIn(true);
  }

  function signupDataHandler(signupData) {
    // console.log("App signupdata", signupData);
    setSignupData(signupData);
  }

  function logOutHandler(logoutData) {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user_id", "");
    setLoggedIn(false);
    console.log(logoutData);
    console.log("Read");
  }

  function recipientUserMessage(userMessage) {
    // console.log("App", user);
    setRecipientMessageData(userMessage);
  }

  function recipientUserEmail(userEmail) {
    setRecipientEmailData(userEmail);
  }

  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                onMessage={recipientUserMessage}
                onEmail={recipientUserEmail}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={<Login onLogin={loginDataHandler} />}
          />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/createlisting" element={<CreateListing />} />
          <Route
            exact
            path="/signup"
            element={<SignUp onSignup={signupDataHandler} />}
          />
          <Route
            exact
            path="/myprofile"
            element={<MyProfile onLogout={logOutHandler} />}
          />
          <Route
            exact
            path="/verify"
            element={
              <Verify signupData={signupData} onLogin={loginDataHandler} />
            }
          />
          <Route
            exact
            path="/message"
            element={<Messaging recipient={recipientMessageData} />}
          />
          <Route
            exact
            path="/email"
            element={<Email recipient={recipientEmailData} />}
          />
          <Route exact path="/editprofile" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
