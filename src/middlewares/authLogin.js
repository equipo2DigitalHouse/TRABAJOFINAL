const { Usuarios } = require("../database/models");

const authLogin = (req,res,next) => {


    if (req.session.usuarioLogeado == undefined) {
        res.redirect("../home_login_error");
    } else {
        console.log(req.session.usuarioLogeado)
        next();
    }


};


module.exports = authLogin;






