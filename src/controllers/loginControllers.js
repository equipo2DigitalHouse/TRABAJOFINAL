const db = require("../database/models");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const express = require("express");
const router = express.Router();
const bycrypt = require("bcrypt");

const loginController = {
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login"), { errors: [] });
    },

    processLogin: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render(path.join(__dirname, "../views/login"), { errors: errors.array() });
        }

        const { email, password } = req.body;

        

        db.Usuarios.findOne({ where: { email } })

            .then(usuarioALoguearse => {
                const passWD = bycrypt.compareSync(password, usuarioALoguearse.password)
                if (passWD){
                    if (!usuarioALoguearse) {
                        return res.render(path.join(__dirname, "../views/login"), { errors: [{ msg: "Credenciales inválidas" }] });
                    } else {
                        req.session.usuarioLogeado = usuarioALoguearse;
                    
                        res.redirect("/");
                    }
                }else{
                    res.send("error, credenciales invalidas")
                }
            })
            .catch(error => {
                console.error('Error en el proceso de inicio de sesión:', error);
                res.status(500).send('Error interno del servidor');
            });
    }

    
    //     let users = userModule; 
    
    //     let usuarioALoguearse;
    
    //     if (errors.isEmpty()){
        //         for (let i = 0; i < users.length; i++) {
            //             if (users[i].email == req.body.email && users[i].password == req.body.password) {
                //                 usuarioALoguearse = users[i];
                //                 break;
                //             }
                //         }
                //     }
                
                
                //     if (usuarioALoguearse === undefined) {
                    //         return res.render(path.join(__dirname, "../views/login"), { errors: [{ msg: "Credenciales inválidas" }] },);
                    //     } else {
                        //         req.session.usuarioLogedo = usuarioALoguearse;
                        //         res.redirect("/"), { errors: errors.array() };
                        //     }
                        
                    };
                        module.exports = loginController;




                    