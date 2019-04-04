const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", UserSchema, "users");
