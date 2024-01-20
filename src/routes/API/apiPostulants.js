const express = require('express');
const router = express.Router();
const apiPostulantsController = require('../../controllers/api/apiPostulantsControllers');

//Todos los productos//
router.get('/', apiPostulantsController.index);


//Detalle de producto//
// router.get('/:id', apiPostulantsController.detail);



module.exports = router