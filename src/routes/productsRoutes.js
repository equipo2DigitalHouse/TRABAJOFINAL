const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsControllers");

const getAllProducts = require("../controllers/getAllProducts");
const deleteProduct = require("../controllers/deleteProductController");

// const {getAllProducts} = require("../controllers/")

router.get("/", productsController.products);
router.get("/products",getAllProducts);

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;