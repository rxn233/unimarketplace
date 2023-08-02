import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import NavBar from "./components/NavBar/NavBar";
import Sell from "./components/Sell/Sell";
import SignUp from "./components/SignUp/SignUp";
import io from "socket.io-client";
import Verify from "./components/SignUp/Verify";

// const socket = io.connect("http://localhost:3001");

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const [signupData, setSignupData] = useState({});

  if (localStorage.getItem("loggedIn") === null) {
    localStorage.setItem("loggedIn", false);
  }

  function loginDataHandler(loginData) {
    console.log("App", loginData);
    localStorage.setItem("loggedIn", true);
    setUserInfo(loginData);
    setLoggedIn(true);
  }

  function signupDataHandler(signupData) {
    console.log("App signupdata", signupData);
    setSignupData(signupData);
  }

  function logOutHandler(logoutData) {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user_id", "");
    setLoggedIn(false);
    console.log(logoutData);
  }

  // console.log("Userinfo", userInfo);

  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/login"
            element={<Login onLogin={loginDataHandler} />}
          />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/sell" element={<Sell />} />
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
        </Routes>
      </Router>
    </div>
  );
}
export default App;
