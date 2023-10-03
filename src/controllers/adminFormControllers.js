const path = require("path");
const fs = require('fs');
const products = require("../database/products.json");
const adminFormController = {
    adminForm: (req, res) =>{
        res.render(path.join(__dirname,"../views/adminForm"))
    },
    addNewProduct: (req, res) =>{


        const { title, price, description, barType, date } = req.body;

        const id = products[products.length - 1].id;

        const newId = id + 1;

        const newProduct = {
            id: newId,
            title,
            description,
            image: req.file ? req.file.filename : '',
            barType,
            date,
            price
        };

        products.push(newProduct);


        const productsPath = path.join(__dirname, "../database/products.json");

        const data = JSON.stringify(products);

        fs.writeFile(productsPath, data, (error)=>{
            if (error){
                res.send(error)
            }else{
                res.redirect("/products")
            }
        })
    }
}




module.exports = adminFormController;