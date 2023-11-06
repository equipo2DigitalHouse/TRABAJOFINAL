const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexControllers");
router.get("/index", indexController.index)

module.exports = router;