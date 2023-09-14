const path = require("path");
const forgotpswdController = {
    forgotpswd: (req, res) =>{
        res.render(path.join(__dirname,"../views/forgotpswd"))
    }
}

module.exports = forgotpswdController;