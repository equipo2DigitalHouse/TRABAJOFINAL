const express = require('express');
const router = express.Router();
const apiCategoriesControllers = require('../../controllers/API/apiCategoriesControllers');

//Todos los productos//
router.get('/', apiCategoriesControllers.index);


//Detalle de producto//
// router.get('/:id', apiPostulantsController.detail);



module.exports = router