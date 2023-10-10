const express = require("express");
const router = express.Router();
const listController = require("../controllers/listControllers");
router.get("/list", listController.listado)

module.exports = router;