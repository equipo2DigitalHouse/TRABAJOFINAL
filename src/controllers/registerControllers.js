const db = require("../database/models");
const path = require("path");
const { validationResult } = require('express-validator');

const registerController = {
    register: (req, res) => {
        const userData = {
            name: "",
            last_name: "",
            email: "",
            user_name: "",
        };
    
        res.render(path.join(__dirname, "../views/register"), { usuarios: userData });
    },
    

    processRegister: function(req, res) {
        if (!req.file || !req.file.filename) {
            console.error("No se ha proporcionado un archivo válido");
            return res.status(400).send("Bad Request");
        }
    
        db.Usuarios.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            user_name: req.body.user_name,
            password: req.body.password,
            isAdmin: 0,
            avatar: req.file.filename
        })
        .then(result => {
            res.redirect("/login");
        })
        .catch(error => {
            console.error("Error al crear el usuario:", error);
            res.status(500).send("Error interno del servidor");
        });
    },
    

    login: (req, res) => {
        res.render('login');
    },

    profile: (req, res) => {
        res.render('home');
    },
}

module.exports = registerController;




// processRegister: (req, res) => { //este procesa la solicitud de registro
//     const resultValidation= validationResult(req); 
//     return res.send (resultValidation.mapped())


//     if (resultValidation.errors.length > 0) {
//         return res.render(path.join(__dirname, "../views/register"), {
//             errors: resultValidation.mapped()
//         });
//     }
//     User.create (req.body);
//     return res.render ('Ok. Se guardó el usuario')
// },


/* codigo anterior const db = require("../database/models");
const path = require("path");

const registerController = {
    register: (req, res) => {
        res.render(path.join(__dirname, "../views/register"));
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.join(__dirname, "../views/register"), {
                errors: resultValidation.mapped()
            });
        }

        db.Usuarios.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            user_name: req.body.user_name,
            password: req.body.password,
            isAdmin: 0,
            avatar: req.file.filename
        })
        .then(usuarios => {
            console.log(usuarios);
            res.render(path.join(__dirname, "../views/register"), { usuarios });
        })
        .catch(error => {
            console.error("Error al crear el usuario:", error);
            res.status(500).send("Error interno del servidor");
        });
    },

    login: (req, res) => {
        // Implementa lógica de inicio de sesión si es necesario
        return res.render('login');
    },

    profile: (req, res) => {
        // Implementa lógica de perfil si es necesario
        return res.render('home');
    }
};

module.exports = registerController;
*/