const path = require("path");
const indexController = {
    index: (req, res) =>{
        res.render(path.join(__dirname,"../views/index"))
    }
}

module.exports = indexController;