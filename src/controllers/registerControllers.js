const path = require("path");
const { validationResult } = require('express-validator');
const registerController = {
    register: (req, res) =>{
        return res.render(path.join(__dirname,"../views/register"))
    }
,
    processRegister: (req, res) => {
        const resultValidation= validationResult(req);

        if (resultValidation.errors.length >0) {
            return res.render ('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } 
        return res.send ('Estás registrado. Bienvenido!')
    },
    login: (req, res) => {
        
        return res.render ('login');
    },
    profile: (req, res) => {
        
        return res.render ('home');
    },
}


module.exports = registerController;