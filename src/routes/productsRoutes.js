const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
const adminCheck = require("../middlewares/admincheck")
// const session = require('express-session');
const multer = require ('multer')

const confirmModifyProduct = require("../controllers/confirmModifyProduct");
const getAllProducts = require("../controllers/getAllProducts");
const deleteProduct = require("../controllers/deleteProductController");
const getProductById = require("../controllers/getProductById");
// const { getAllProducts , getProductById, deleteProduct, productsController } = require("../controllers");

const storage = multer.diskStorage({ //ojo con esto que va en otro lado
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/images/productos'))
    },
    filename: (req, file, cb) => {
      let  fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName); 
    }
});


const uploadFile= multer ({ storage });
const { body } = require ('express-validator')


router.get("/", productsController.products);

router.get("/products", getAllProducts.list)

router.get("/product/:id",adminCheck,getProductById);

router.delete('/product/delete/:id', deleteProduct);

router.put("/product/edit/:id",confirmModifyProduct);
module.exports = router;