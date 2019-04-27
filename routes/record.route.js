const express = require("express");
const record_controller = require("../controllers/record.controller");
var VerifyToken = require("./VerifyToken");

const router = express.Router();

router.post("/addRecord", VerifyToken, record_controller.addRecord);
router.post("/deleteRecord", VerifyToken, record_controller.deleteRecord);
router.post("/updateRecord", VerifyToken, record_controller.updateRecord);
router.post("/listRecords", VerifyToken, record_controller.listRecords);
router.post("/listOwnerRecords", VerifyToken, record_controller.listOwnerRecords);
router.post("/viewRecord", VerifyToken, record_controller.viewRecord);
router.post("/changeOwnership", VerifyToken, record_controller.changeOwnership);

module.exports = router;
