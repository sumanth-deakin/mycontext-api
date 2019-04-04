const express = require("express");
const user_controller = require("../controllers/user.controller");

const router = express.Router();

router.get("/list-users", user_controller.listUsers);

module.exports = router;
