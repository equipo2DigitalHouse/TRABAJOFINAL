const path = require("path");
const db = require("../database/models");

const confirmModifyProduct = (req, res) => {
    const { id } = req.params;
    const { product_name, price, description } = req.body;

    db.Productos.findByPk(id)
        .then((product) => {
            if (!product) {
                return res.send("Product not found");
            }

            product.product_name = product_name;
            product.price = price;
            product.description = description;

            return product.save();
        })
        .then(() => {
            res.redirect("/products");
        })
        .catch((error) => {
            console.error("Error updating product:", error);
            res.status(500).send("Internal Server Error");
        });
};

module.exports = confirmModifyProduct;


// const path = require ("path");
// const products = require("../database/products.json");
// const fs = require("fs");
// const { error } = require("console");

// const confirmModifyProduct = (req, res) => {
//     const { id } = req.params;
//     const {title,price,description} = req.body;

//     products.forEach((product)=>{
//         if (product.id == id){
//             product.id = id;
//             product.title = title;
//             product.price = price;
//             product.description = description;
//         }
//     })

//     const productPath = path.join(__dirname,"../database/products.json");

//     const data = JSON.stringify(products);

//     fs.writeFile(productPath,data, (error) => {
//         if (error){
//             res.send("Error: " + error);
//         }else{
//             res.redirect("/products")
//         }
//     })

// }

// module.exports = confirmModifyProduct;