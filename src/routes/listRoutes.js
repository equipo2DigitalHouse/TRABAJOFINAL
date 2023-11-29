const express = require("express");
const router = express.Router();
const authLogin = require("../middlewares/authLogin")
const listController = require("../controllers/listControllers");

router.get("/list",authLogin,listController.listado)

module.exports = router;