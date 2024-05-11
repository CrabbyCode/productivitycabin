const mongoose = require("../db");
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profilePic: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
