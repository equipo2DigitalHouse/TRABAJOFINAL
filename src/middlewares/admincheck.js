const express = require('express');

const adminCheck = (req,res) => {
    
    // if(req.session.usuarioLogedo.email !== "admin@gmail.com"){
    //     res.send("no tienes los permisos para acceder aquí")
    //     console.log("hola")
    // }else{
    //     next();
    //     console.log("hola")
    // }
    // console.log("hola")
};

module.exports = adminCheck;