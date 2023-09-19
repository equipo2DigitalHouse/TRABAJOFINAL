const path = require("path");
const adminFormController = {
    adminForm: (req, res) =>{
        res.render(path.join(__dirname,"../views/adminForm"))
    }
}

module.exports = adminFormController;