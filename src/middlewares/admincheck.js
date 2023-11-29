const adminCheck = (req, res, next) => {

    if (req.session.usuarioLogedo == undefined) {
        res.redirect("../home_login_error")
        // }else if (req.user && req.user.isAdmin === 'yes') {
                
        //         next
        //     next();
        //       } 
        }else if( req.session.usuarioLogedo.email !== "admin@gmail.com"){
        res.send("usted no tiene derechos de acceder a esta página")
        }else{
            next();
        


}
};

module.exports = adminCheck;





