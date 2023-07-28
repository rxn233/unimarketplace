const mongoose = require("mongoose");

const verificationSchema = mongoose.Schema({
  user_email: { type: String, required: true, unique: true },
  code: { type: Number, required: true },
});

const Verification = mongoose.model("Verification", verificationSchema);

module.exports = Verification;
