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

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const [signupData, setSignupData] = useState({});
  const [recipientUserData, setRecipientUserData] = useState();

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
  }

  function recipientUser(user) {
    // console.log("App", user);
    setRecipientUserData(user);
  }

  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage onMessage={recipientUser} />}
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
            element={<Messaging recipient={recipientUserData} />}
          />
          <Route exact path="/editprofile" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
