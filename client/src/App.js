import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import NavBar from "./components/NavBar/NavBar";
import Sell from "./components/Sell/Sell";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/signup" element ={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
