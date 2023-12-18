const express = require("express");
const router = express.Router();
const executiveController = require("../controllers/executiveControllers.js");
router.get("/executive", executiveController.executiveController)

module.exports = router;