const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controller/api/apiUsersController');

//Todos los productos//
router.get('/', apiUsersController.list);


//Detalle de producto//
router.get('/:id', apiUsersController.detail);



module.exports = router