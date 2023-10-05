const express = require("express");
const router = express.Router();
const listadoController = require("../controllers/listadoControllers");
router.get("/listado", listadoController.listado)

module.exports = router;