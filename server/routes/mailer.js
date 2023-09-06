const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { Username, Password } = require("../env");
const User = require("../models/users");

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

const contactRecipient = async (req, res) => {
  const sender_id = req.body.user_email;
  const receiver_id = req.body.recipient.id;
  const messageContent = req.body.message;
  console.log(sender_id, receiver_id);
  try {
    const senderInfo = await User.findOne({ user_id: sender_id });
    const senderEmail = senderInfo.user_email;
    const receiverInfo = await User.findOne({ user_id: receiver_id });
    const receiverEmail = receiverInfo.user_email;
    const contactContent = `<p> ${messageContent} </p>
    <p>Please contact me back on Email: ${senderEmail} </p>`;
    const contactOptions = {
      from: `UniMarketPlace ${Username}`,
      to: receiverEmail,
      subject: "Message regarding your product",
      html: contactContent,
    };
    const contactInfo = await transporter.sendMail(contactOptions);
    res.json({ flag: "y" });
  } catch (err) {
    res.json({ flag: "n", error: err });
  }
};

module.exports = {
  sendMail,
  contactRecipient,
};
