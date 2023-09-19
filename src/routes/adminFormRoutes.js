const express = require("express");
const router = express.Router();
const adminFormController = require("../controllers/adminFormControllers");
router.get("/", adminFormController.adminForm)

module.exports = router;