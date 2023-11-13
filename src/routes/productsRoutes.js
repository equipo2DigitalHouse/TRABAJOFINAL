const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
// const session = require('express-session');

const confirmModifyProduct = require("../controllers/confirmModifyProduct");
const getAllProducts = require("../controllers/getAllProducts");
const deleteProduct = require("../controllers/deleteProductController");
const getProductById = require("../controllers/getProductById");

// const { getAllProducts , getProductById, deleteProduct, productsController } = require("../controllers");

// router.use(session({
//     secret: 'Secreto',
// }));

router.get("/", productsController.products);
router.get("/products", (req, res) => {
    getAllProducts(req, res);
});

router.get("/product/:id",getProductById);

router.delete('/product/delete/:id', deleteProduct);

router.put("/product/edit/:id",confirmModifyProduct);
module.exports = router;