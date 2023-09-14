const express = require("express");
const router = express.Router();
const forgotpswdController = require("../controllers/forgotpswdControllers");
router.get("/", forgotpswdController.forgotpswd)

module.exports = router;