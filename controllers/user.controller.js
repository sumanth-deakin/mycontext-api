const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Request = require("request");

exports.listUsers = function(req, res) {
  var output = {
    success: true,
    message: "Successfully fetched users."
  };
  res.json(output);
};

exports.register = function(req, res) {
  User.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) {
        throw err;
      }

      const new_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.user_type
      });

      if (user) {
        res.json({
          success: false,
          message: "User already exists."
        });
      } else {
        new_user.save(function(error) {
          if (error) {
            res.json({
              success: false,
              message: "User registration failed."
            });
          }

          Request.post(
            {
              headers: { "content-type": "application/json" },
              url: "http://40.76.41.106:3000/api/com.mycontext.Owner",
              body: JSON.stringify({
                $class: "com.mycontext.Owner",
                ownerId: new_user._id,
                name: new_user.name
              })
            },
            function(err, httpResponse, body) {
              if (err) {
                new_user.remove();
                res.json({
                  success: false,
                  message: "User registration failed."
                });
              }

              res.json({
                success: true,
                message: "User registration successful."
              });
            }
          );
        });
      }
    }
  );
};

exports.login = function(req, res) {
  User.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) {
        throw err;
      }

      if (user) {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) {
            throw err;
          }

          if (isMatch) {
            const payload = {
              userid: user._id
            };

            var token = jwt.sign(payload, "MyContext", {
              expiresIn: 60 * 60 * 60 * 240
            });

            res.json({
              success: true,
              message: "Access token generation successfull.",
              token: token,
              name: user.name,
              email: user.email
            });
          } else {
            res.json({
              success: false,
              message: "Authentication failed. Wrong password."
            });
          }
        });
      } else {
        res.json({
          success: false,
          message: "Authentication failed. User not found."
        });
      }
    }
  );
};
