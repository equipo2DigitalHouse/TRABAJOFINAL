const path = require("path");
const productsController = {
    products: (req, res) =>{
        res.render(path.join(__dirname,"../views/products"),{ req: req })
    }
}

module.exports = productsController;