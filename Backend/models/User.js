// models/userModel.js
const mongoose = require('mongoose');

// Define the schema for the user
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('User', userSchema);
