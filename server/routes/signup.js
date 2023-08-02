const express = require("express");
const app = express();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const mailer = require("../routes/mailer");
const Verification = require("../models/verification");

const generateVerificationCode = async (email) => {
  try {
    const verificationCode = crypto.randomInt(100000, 999999).toString();
    await Verification.insertMany({
      user_email: email,
      code: verificationCode,
    });
    mailer.sendMail(email, verificationCode);
  } catch (err) {
    console.log("Error in verify db", err);
  }
};

const signupCheck = async (req, res) => {
  console.log("Singup Check");
  const { enteredEmail } = req.query;
  console.log(enteredEmail);
  const user = await User.findOne({ user_email: enteredEmail });
  if (!user) {
    if (true) {
      generateVerificationCode(enteredEmail);
      res.json({ flag: "y" });
    } else {
      res.json({
        flag: "n",
        error:
          "Not a student email id, please student your student email address",
      });
    }
  } else {
    res.json({ flag: "n", error: "User already exists, please login" });
  }
};

const SignupUser = async (enteredName, enteredEmail, enteredPassword) => {
  // try {
  //   const userID = enteredEmail.split("@");
  //   const hashedPassword = await bcrypt.hash(enteredPassword, 10);
  //   console.log("Hashed");
  //   console.log(hashedPassword);
  //   try {
  //     await User.insertMany({
  //       user_id: userID[0],
  //       user_name: enteredName,
  //       user_email: enteredEmail,
  //       user_password: hashedPassword,
  //     })
  //       .then((data) => {
  //         console.log("Success", data);
  //       })
  //       .catch((err) => {
  //         console.log("Error", err);
  //       });
  //   } catch (err) {
  //     res.json({ flag: "n", error: "Error signing up" });
  //   }
  //   res.json({
  //     flag: "y",
  //     user_id: userID[0],
  //     email: enteredEmail,
  //   });
  // } catch (err) {
  //   console.log("Error", err);
  // }
};

const verifyCode = async (req, res) => {
  console.log("Verify Code section");
  const { enteredEmail, enteredName, enteredPassword, enteredCode } = req.body;
  const userID = enteredEmail.split("@");
  console.log("Verify backend", enteredEmail, enteredCode);
  const verifyUser = await Verification.findOne({ user_email: enteredEmail });
  console.log("verify user code", verifyUser.code);
  if (verifyUser.code === parseInt(enteredCode)) {
    // SignupUser(enteredName, enteredEmail, enteredPassword);
    try {
      const userID = enteredEmail.split("@");
      const hashedPassword = await bcrypt.hash(enteredPassword, 10);
      console.log("Hashed");
      console.log(hashedPassword);
      try {
        await User.insertMany({
          user_id: userID[0],
          user_name: enteredName,
          user_email: enteredEmail,
          user_password: hashedPassword,
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
    } catch (err) {
      console.log("Error", err);
    }
  } else {
    res.json({ flag: "n", error: "Code doesnot match" });
  }
};

// const userSignup = async (req, res) => {
//   console.log("Signup");
//   const { enteredName, enteredEmail, enteredPassword } = req.body;
//   console.log(enteredName, enteredEmail, enteredPassword);

//   try {
//     const user = await User.findOne({ user_email: enteredEmail });
//     if (!user) {
//       if (enteredEmail.includes("bham.ac.uk")) {
//         const userID = enteredEmail.split("@");
//         const hashedPassword = await bcrypt.hash(enteredPassword, 10);
//         console.log("Hashed");
//         console.log(hashedPassword);
//         try {
//           await User.insertMany({
//             user_id: userID[0],
//             user_name: enteredName,
//             user_email: enteredEmail,
//             user_password: hashedPassword,
//           })
//             .then((data) => {
//               console.log("Success", data);
//             })
//             .catch((err) => {
//               console.log("Error", err);
//             });
//         } catch (err) {
//           res.json({ flag: "n", error: "Error signing up" });
//         }
//         res.json({
//           flag: "y",
//           user_id: userID[0],
//           email: enteredEmail,
//         });
//       } else {
//         res.json({ flag: "n", error: "Email is not a student email" });
//       }
//     } else {
//       res.json({ flag: "n", error: "Email already exists, please login" });
//     }
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

module.exports = {
  // userSignup,
  signupCheck,
  verifyCode,
};
