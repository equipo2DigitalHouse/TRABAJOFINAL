const db = require("../../database/models");
const path = require('path');

const getAllProducts = {
    list: function(req,res) {
        db.Productos.findAll()
        .then(function(productos){
            const ruta = path.join(__dirname, '../views/products');
                res.render(ruta, { req: req, productos: productos });
        })
    },
    create: function(req,res) {
        // const image = req.file ? req.file.filename : '';
        db.Productos.create({
            product_name: req.body.product_name,
            description: req.body.description,
            image: req.file.filename,
            date: req.body.date,
            price: req.body.price
        })
        .then (function(result) {
            db.Productos.findAll()
            .then(function(productos){
                res.render(path.join(__dirname,"../views/products"), {productos: productos, req},)

            })
        })
    }
    

    // res.render(ruta, { req: req, allProducts: products });
    // // res.send(products)
};

module.exports = getAllProducts;
