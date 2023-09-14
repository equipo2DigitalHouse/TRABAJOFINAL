const path = require("path");
const contactosController = {
    contactos: (req, res) =>{
        res.render(path.join(__dirname,"../views/contactos"))
    }
}

module.exports = contactosController;