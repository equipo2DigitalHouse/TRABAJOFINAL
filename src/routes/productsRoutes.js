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

const { body, validationResult } = require('express-validator');
const allowedImageFormats = ['jpg', 'jpeg', 'png', 'gif'];

const productValidations = [
  // Nombre
  body('name')
    .notEmpty().withMessage('Escribe el nombre del producto')
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

  // Descripción
  body('description')
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),

  // Imagen
  body('image')
    .custom((value, { req }) => {
      const file = req.file;

      if (!file) {
        throw new Error('Debes cargar una imagen');
      }

      const fileExtension = file.originalname.split('.').pop().toLowerCase();
      if (!allowedImageFormats.includes(fileExtension)) {
        throw new Error('Formato de imagen no válido. Utiliza JPG, JPEG, PNG o GIF');
      }

      return true;
    }),
];

// Middleware para manejar los errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};


// const uploadFile= multer ({ storage });
// const { body } = require ('express-validator')


router.get("/", productsController.products);

router.get("/products", getAllProducts.list)

router.get("/product/:id",adminCheck,getProductById);

router.delete('/product/delete/:id', deleteProduct);

router.put("/product/edit/:id",confirmModifyProduct);

module.exports = {
  productValidations,
  handleValidationErrors
};
module.exports = router;