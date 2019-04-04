const User = require("../models/user.model");

exports.listUsers = function(req, res) {
  var output = {
    success: true,
    message: "Successfully fetched users."
  };
  res.json(output);
};
