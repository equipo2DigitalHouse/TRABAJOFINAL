const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../../controllers/api/apiUsersControllers');

//Todos los productos//
router.get('/users', apiUsersControllers.index);


//Detalle de producto//
router.get('/:id', apiUsersControllers.detail);



module.exports = router