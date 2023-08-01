const express = require("express");
const app = express();
const User = require("../models/users");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  console.log("Logging server");
  //   console.log(req.body);
  // res.status(200).json({message: "success"})
  const getData = req.query;

  try {
    const user = await User.findOne({ user_email: getData.enteredEmail });
    console.log(user);
    if (!user) {
      res.json({ flag: "n", error: "User not found" });
    } else {
      const matchPassword = await bcrypt.compare(
        getData.enteredPassword,
        user.user_password
      );
      console.log(matchPassword);
      //if (user.user_password !== enteredPassword) {
      if (!matchPassword) {
        res.json({ flag: "n", error: "Incorrect password" });
      } else {
        res.json({ flag: "y", userData: user });
      }
    }
  } catch (err) {
    res.send("Error going into catch");
  }
};

module.exports = {
  loginUser,
};
