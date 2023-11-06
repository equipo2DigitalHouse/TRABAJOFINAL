const path = require("path");
const { validationResult } = require('express-validator');
const registerController = {
    register: (req, res) =>{
        res.render(path.join(__dirname,"../views/register"))
    }
,
    processRegister: (req, res) => { //este procesa la solicitud de registro
        const resultValidation= validationResult(req); 
        return res.send (resultValidation.mapped())


        if (resultValidation.errors.length > 0) {
            return res.render(path.join(__dirname, "../views/register"), {
                errors: resultValidation.mapped()
            });
        }
        User.create (req.body);
        return res.render ('Ok. Se guardó el usuario')
    },
    login: (req, res) => {
        
        return res.render ('login');
    },
    profile: (req, res) => {
        
        return res.render ('home');
    },
}


module.exports = registerController;