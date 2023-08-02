const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { Username, Password } = require("../env");

console.log("Below html section");

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: Username,
//       pass: Password,
//     },
//   });

//   console.log("Below transporter section");
// };
//Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: Username,
    pass: Password,
  },
});

//Function to send mail
const sendMail = async (email, code) => {
  const mailContent = `
    <p>Your verification code is: ${code}</p>
  `;

  const mailOptions = {
    from: `UniMarketPlace ${Username}`,
    to: email,
    subject: "Verification Code",
    html: mailContent,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent" + info.messageId);
};

//   const info = await transporter.sendMail({
//     from: `UniMarketPlace ${Username}`,
//     to: "rohit007nair@gmail.com",
//     subject: "Verification Code",
//     html: mailContent,
//   });
//   console.log("Message sent" + info.messageId);
// };

// mailer().catch((err) => {
//   console.log("Error", err);
// });

module.exports = {
  sendMail,
};
