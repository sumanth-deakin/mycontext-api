var jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token)
    return res.status(403).send({
      auth: false,
      message: "No token provided."
    });
  jwt.verify(token, "MyContext", function(err, decoded) {
    if (err)
      return res.status(500).send({
        auth: false,
        message: "Failed to authenticate token."
      });

    req.body.userId = decoded.userid;
    next();
  });
}

module.exports = verifyToken;
