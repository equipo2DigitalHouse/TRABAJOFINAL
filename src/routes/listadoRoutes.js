const express = require("express");
const router = express.Router();
const listadoController = require("../controllers/listadoControllers");
router.get("/", listadoController.listado)

module.exports = router;