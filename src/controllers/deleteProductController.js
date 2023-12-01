const { Productos } = require("../database/models");

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar el producto en la base de datos por su ID
        const product = await Productos.findByPk(id);

        if (!product) {
            return res.send("Product not found");
        }

        // Eliminar el producto de la base de datos
        await product.destroy();

        res.redirect("/products");
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = deleteProduct;


// const products = require('../database/products.json');
// const path = require('path');
// const fs = require('fs');


// const deleteProduct = (req,res) => {
//     const { id } = req.params;

//     const newArrayProducts = products.filter((prod) => prod.id !== parseInt(id));

//     const productsPath = path.join(__dirname,'../database/products.json');

//     const data = JSON.stringify(newArrayProducts);

//     //guardar los datos en el archivo json
//     fs.writeFile(productsPath,data, (error) => {
//         if(error){
//             res.send(`Error: ${error}`);
//         }else{
//             res.redirect('/products');
//         }
//     });

//     //res.send(newArrayProducts);
// }

// module.exports = deleteProduct;