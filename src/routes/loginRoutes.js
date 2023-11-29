const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginControllers");
const { check } = require("express-validator");

router.get("/login",[
    check("email").isEmail().withMessage("Email invalido"),
    check("password").isLength({min: 8}).withMessage("la contraseña debe tener al menos 8 caracteres")
] ,loginController.login);

router.post("/login",loginController.processLogin)

// router.get("/check",function(req,res) {
//     if(req.session.usuarioLogedo == undefined){
//         res.send("el usuario no esta logueado")
//     }else{
//         res.send("el ususario logueado es "+ req.session.usuarioLogedo.email);
//     }
// });


module.exports = router;