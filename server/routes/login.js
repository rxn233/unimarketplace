const express = require("express");
const app = express();
const User = require("../models/users");

const loginUser = async (req, res) => {
  console.log("Logging server");
  //   console.log(req.body);
  // res.status(200).json({message: "success"})
  const { enteredEmail, enteredPassword } = req.body;
  console.log(enteredEmail, enteredPassword);

  try {
    const user = await User.findOne({ user_email: enteredEmail });
    console.log(user);
    if (!user) {
      res.send("User not found");
    } else {
      if (user.user_password !== enteredPassword) {
        res.send("Incorrect password");
      } else{
        res.send('y');
      } 
    }
  } catch (err) {
    res.send("Error going into catch");
  }
};

module.exports = {
  loginUser,
};
