const express = require("express");
const router = express.Router();
const forgotpswdController = require("../controllers/forgotpswdControllers");
router.get("/forgotpswd", forgotpswdController.forgotpswd)

module.exports = router;