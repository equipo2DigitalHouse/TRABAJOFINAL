const path = require("path");
const { check, validationResult, body } = require("express-validator");
const userModule = require("../database/users.json");
const express = require("express");
const router = express.Router();

const loginController = {
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login"), { errors: [] });;
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        let users = userModule; 

        // console.log('users:', users); 
        // console.log('req.body:', req.body); 

        let usuarioALoguearse;

        if (errors.isEmpty()){
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email && users[i].password == req.body.password) {
                    usuarioALoguearse = users[i];
                    break;
                }
            }
        }

        // console.log('usuarioALoguearse:', usuarioALoguearse); 

        if (usuarioALoguearse === undefined) {
            return res.render(path.join(__dirname, "../views/login"), { errors: [{ msg: "Credenciales inválidas" }] },);
        } else {
            req.session.usuarioLogedo = usuarioALoguearse;
            res.redirect("/"), { errors: errors.array() };
        }
    }
};

// router.get("/check"),(req,res) => {
//     if(req.session.usuarioLogedo == undefined){
//         res.send("el usuario no esta logueado")
//     }else{
//         res.send("el ususario logueado es "+ req.session.usuarioLogedo.email);
//     }
// }

module.exports = loginController;
