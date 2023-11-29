

const authLogin = (req,res,next) => {

    const express = require('express');
    const app = express();
    
    if(req.session.usuarioLogedo == undefined){
        res.redirect("../home_login_error")
    }else{
        next();
    }
};


module.exports = authLogin;






