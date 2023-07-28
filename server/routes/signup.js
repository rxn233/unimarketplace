const express = require("express");
const app = express();
const User = require("../models/users");

const userSignup = async (req, res) => {
  console.log("Signup");
  const { enteredName, enteredEmail, enteredPassword } = req.body;
  console.log(enteredName, enteredEmail, enteredPassword);

  try {
    const user = await User.findOne({ user_email: enteredEmail });
    if (!user) {
      if (enteredEmail.includes("bham.ac.uk")) {
        const userID = enteredEmail.split("@");
        try {
          await User.insertMany({
            user_id: userID[0],
            user_name: enteredName,
            user_email: enteredEmail,
            user_password: enteredPassword,
          })
            .then((data) => {
              console.log("Success", data);
            })
            .catch((err) => {
              console.log("Error", err);
            });
        } catch (err) {
          res.json({ flag: "n", error: "Error signing up" });
        }
        res.json({
          flag: "y",
          user_id: userID[0],
          email: enteredEmail,
        });
      } else {
        res.json({ flag: "n", error: "Email is not a student email" });
      }
    } else {
      res.json({ flag: "n", error: "Email already exists, please login" });
    }
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {
  userSignup,
};
