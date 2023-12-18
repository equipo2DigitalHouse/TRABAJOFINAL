const path = require("path");
const executiveController = {
    executiveController: (req, res) =>{
        res.render(path.join(__dirname,"../views/executive"))
    },
}

module.exports = executiveController