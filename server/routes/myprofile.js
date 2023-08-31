const express = require("express");
const app = express();
const User = require("../models/users");

const profileDisplay = async (req, res) => {
  const param = req.query;
  console.log(param.user_id);

  try {
    const user = await User.findOne({ user_id: param.user_id });
    res.json(user);
  } catch (error) {
    console.log("Myprofile error server");
    res.json({ flag: "n", error: error });
  }
};

const updateProfile = async (req, res) => {
  // console.log(req.body);
  const requestParameter = req.body.updatedData;
  console.log(requestParameter);
  try {
    const user = await User.findOne({ user_id: requestParameter.userId });
    await User.findOneAndUpdate(
      { user_id: requestParameter.userId },
      {
        user_name: requestParameter.userName,
        user_contact: requestParameter.userContact,
        user_address: requestParameter.userAddress,
        user_location: requestParameter.userLocation,
      }
    );
    console.log("User", user);
    res.json({ flag: "y" });
  } catch (error) {
    res.json({ flag: "n", error: error });
  }
};

module.exports = {
  profileDisplay,
  updateProfile,
};
