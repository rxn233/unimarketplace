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
// import LoginContext from "./contexts/LoginContext";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState();

  if (localStorage.getItem("loggedIn") === null) {
    localStorage.setItem("loggedIn", false);
  }

  function loginDataHandler(loginData) {
    console.log("App", loginData);
    localStorage.setItem("loggedIn", true);
    setUserInfo(loginData);
    setLoggedIn(true);
  }

  function logOutHandler(logoutData) {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user_id", "");
    setLoggedIn(false);
    console.log(logoutData);
  }

  return (
    <div>
      <NavBar userInfo={userInfo} loggedIn={loggedIn} />
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
            element={<SignUp onLogin={loginDataHandler} />}
          />
          <Route
            exact
            path="/myprofile"
            element={<MyProfile onLogout={logOutHandler} userInfo={userInfo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
