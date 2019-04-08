const express = require("express");
const user_controller = require("../controllers/user.controller");
var VerifyToken = require("./VerifyToken");

const router = express.Router();

router.get("/list-users",VerifyToken, user_controller.listUsers);
router.post("/register", user_controller.register);
router.post("/login", user_controller.login);

module.exports = router;
