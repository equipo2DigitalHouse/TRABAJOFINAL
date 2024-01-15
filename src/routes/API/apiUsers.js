const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../controllers/api/apiUsersControllers');

//Todos los productos//
router.get('/', apiUsersControllers.list);


//Detalle de producto//
router.get('/:id', apiUsersControllers.detail);



module.exports = router