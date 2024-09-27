const path = require("path");
const homeController = {
    home: (req, res) =>{
        // console.log(req.session);
        res.render(path.join(__dirname, "../views/home"), { req: req });
        
    },
    home_login_error: (req,res) => {
        res.render(path.join(__dirname,"../views/home_login_error"))
    },
    logOut: (req,res) => {
        req.session.usuarioLogeado = undefined
        res.redirect("/")
    }
}

module.exports = homeController;