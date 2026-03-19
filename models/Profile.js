const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  resume: String,
  companyName: String
});

module.exports = mongoose.model("Profile", profileSchema);