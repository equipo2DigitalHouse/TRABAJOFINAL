const path = require("path");
const shopControllers = {
    shopView: (req, res) =>{
        res.render(path.join(__dirname,"../views/shop"))
    },
}

module.exports = shopControllers;