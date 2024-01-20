const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsControllers');

//Todos los productos//
router.get('/', apiProductsController.index);


//Detalle de producto//
router.get('/:id', apiProductsController.detail);



module.exports = router