const express = require("express");
const app = express();
const User = require("../models/users");

const profileDisplay = async (req, res) => {
  const param = req.query;
  console.log(param.user_id);

  try{
  const user = await User.findOne({ user_id: param.user_id });
  res.json(user);
  } catch(error){
      console.log('Myprofile error server');
  }
};

module.exports = {
  profileDisplay,
};
