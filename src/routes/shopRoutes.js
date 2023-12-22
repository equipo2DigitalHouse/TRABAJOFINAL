const express = require("express");
const router = express.Router();
const shopControllers = require("../controllers/shopControllers");
router.get("/shop", shopControllers.shopView)

module.exports = router;