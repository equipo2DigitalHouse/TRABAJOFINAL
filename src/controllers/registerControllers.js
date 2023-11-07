const path = require('path');
const bcryptjs = require('bcryptjs');
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
                errors: resultValidation.mapped(),
                oldData: req.body
            });

            return res.send('ok, se guardo al usuario');
        }

        let userInDB = User.findByField('email', req.body.email);
        if (userInDB) {
            return res.send('userRegisterForm', {
           errors: {
           email: {
           msg: 'Este email ya esta registrado'
           }
           },
           oldData: req.body
           });
           }


        const userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
            }
           
        const userCreate = User.create (userToCreate);   

        return res.redirect('/user/login')
    },

    // login: (req, res) => {
        
    //     return res.render ('login');
    // },

    // loginProcess: (req, res) =>  {
    //     const userToLogin = User.findByField('email', req.body.email);
    //     if(userToLogin) {
    //     }
    //     return res.send(userToLogin);
    //     },
    
    profile: (req, res) => {        
        return res.render ('home');
    },
}           //min 54.25         --> login


module.exports = registerController;