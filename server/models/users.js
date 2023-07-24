const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  user_name: { type: String, required: true },
  user_address: { type: String },
  user_contact: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
