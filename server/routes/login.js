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
      res.json({ flag: "n", error: "User not found" });
    } else {
      if (user.user_password !== enteredPassword) {
        res.json({ flag: "n", error: "Incorrect password" });
      } else {
        res.json({ flag: "y", user_id: user.user_id });
      }
    }
  } catch (err) {
    res.send("Error going into catch");
  }
};

module.exports = {
  loginUser,
};
