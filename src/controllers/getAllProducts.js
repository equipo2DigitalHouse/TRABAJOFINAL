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
    create: async function(req, res) {
        try {
            const result = await db.Productos.create({
                product_name: req.body.product_name,
                description: req.body.description,
                image: req.file.filename,
                date: req.body.date,
                price: req.body.price
            });
    
            const productos = await db.Productos.findAll();
    
            res.render(path.join(__dirname, "../views/products"), { productos, req });
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).send("Error interno del servidor");
        }
    
    }
    
};

module.exports = getAllProducts;
