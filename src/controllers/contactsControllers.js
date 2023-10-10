const path = require("path");
const contactsController = {
    contactos: (req, res) =>{
        res.render(path.join(__dirname,"../views/contacts"))
    }
}

module.exports = contactsController;