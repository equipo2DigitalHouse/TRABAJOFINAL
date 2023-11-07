const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginControllers");
const { check } = require("express-validator");

router.get("/login",[
    check("email").isEmail().withMessage("Email invalido"),
    check("password").isLength({min: 8}).withMessage("la contraseña debe tener al menos 8 caracteres")
] ,loginController.login);

router.post("/login",loginController.processLogin)

module.exports = router;