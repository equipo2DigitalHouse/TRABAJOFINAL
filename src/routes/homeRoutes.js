const express = require("express");
const session = require('express-session');
const router = express.Router();
const homeController = require("../controllers/homeControllers");

router.use(session({
    secret: 'Secreto',
}));

router.get("/", homeController.home);
router.get("/home_login_error",homeController.home_login_error)
router.get("/logOut",homeController.logOut)

module.exports = router;