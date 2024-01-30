const express = require("express");
const router = express.Router();

const tragosController = require('../controllers/tragos');

router.get('/tragos', tragosController.tragosView);

module.exports = router;