const path = require("path");
const listadoController = {
    listado: (req, res) =>{
        res.render(path.join(__dirname,"../views/listado"))
    }
}

module.exports = listadoController;