const express = require("express");
const router = express.Router();
const contactosController = require("../controllers/contactosControllers");
router.get("/", contactosController.contactos)

module.exports = router;