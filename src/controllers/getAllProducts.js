// const products = require('../database/products.json');
// const path = require('path');

// const getAllProducts = (req,res) => {
    
//     const ruta = path.join(__dirname,'../views/products.ejs');
    
//     res.render(ruta,{allProducts: products})
//     // res.send(products)
// }

// module.exports = getAllProducts;

const products = require('../database/products.json');
const path = require('path');

const getAllProducts = (req, res) => {
    const ruta = path.join(__dirname, '../views/products.ejs');

    res.render(ruta, { req: req, allProducts: products });
    // res.send(products)
};

module.exports = getAllProducts;
