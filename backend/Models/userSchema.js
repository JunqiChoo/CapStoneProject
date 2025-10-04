const mongoose = require('mongoose');

//User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin"],//Only these values are allowed (Adddifferent user as necessary)
    default: "Admin",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  last_login_at: {
    type: Date,
  },
});

const User = mongoose.model("User",UserSchema);
module.exports = User;