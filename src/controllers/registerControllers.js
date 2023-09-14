const path = require("path");
const registerController = {
    register: (req, res) =>{
        res.render(path.join(__dirname,"../views/register"))
    }
}

module.exports = registerController;