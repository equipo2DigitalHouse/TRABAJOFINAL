const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsControllers");
router.get("/contacts", contactsController.contactos)

module.exports = router;