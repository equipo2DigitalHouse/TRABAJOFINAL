const express = require('express');
const homeController = require ('../controllers/homeControllers');

const router = express.Router();
router.get('/', homeController.home);

module.exports = router;