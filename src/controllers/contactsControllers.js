const path = require("path");
const db = require ('../database/models')

const contactsController = {
    contactos: (req, res) =>{
        res.render(path.join(__dirname,"../views/contacts"))
    },      // { usuarios: userData });
    postuling: (req, res) => {
        const postulantesData = {
            nombre: "",
            apellido: "",
            email: "",
            curriculum: "",
        };
    
        res.render(path.join(__dirname, "../views/contacts"), { postulantes: postulantesData });
    },
        processPostulant: function(req, res) {
            if (!req.file || !req.file.filename) {
                console.error("No se ha proporcionado un archivo válido");
                return res.status(400).send("Bad Request");
            }
        
            db.Postulantes.create({
                nombre: req.body.name,
                apellido: req.body.surname,
                email: req.body.email,
                curriculum: req.file.filename,
                 
            })
            .then(result => {
                res.send("Registro exitoso");
            
                // setTimeout(() => {
                //     res.redirect("/login");
                // }, 2000); 
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
    
        


module.exports = contactsController; 