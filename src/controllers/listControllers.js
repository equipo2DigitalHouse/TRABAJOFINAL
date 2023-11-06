const path = require("path");
const listController = {
    listado: (req, res) =>{
        res.render(path.join(__dirname,"../views/list"))
    }
}

module.exports = listController;