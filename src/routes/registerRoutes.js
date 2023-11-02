const express = require("express");
const router = express.Router();
const multer = require ('multer')
const path = require ('path')
const { body } = require ('express-validator') //tambièn se la conoce como variable check, son lo mismo, pero body
// es mas asociable a la idea de validar el formulario
const validations= [
    body('name').notEmpty().withMessage('Escribe tu nombre'),
    body('surname').notEmpty().withMessage('Escribe tu apellido'),
    body('E-mail').notEmpty().withMessage('Escribe tu Email'),
    body('nationality').notEmpty().withMessage('Escribe tu nacionalidad'),
    body('userName').notEmpty().withMessage('Escribe tu nombre de usuario'),
    body('avatar').notEmpty().withMessage('Selecciona tu foto de perfil'),
    body('password').notEmpty().withMessage('Escribe tu contraseña'),
    body('rptPassword').notEmpty().withMessage('Repite la misma contaseña'),
]
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/avatars'); // Cambié '../' a 'public/' para que sea relativo al directorio raíz del proyecto
    },
    filename: (req, file, cb) => {
      let  fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName); // Agregué el segundo argumento con el nombre de archivo
    }
  });
  


const uploadFile= multer({ storage: storage });
const registerController = require("../controllers/registerControllers");

router.get("/register", registerController.register)
//ruta de posteo para la suba de imagen de perfil 
router.post("/register", uploadFile.single ('avatar'), validations, registerController.processRegister) 
//lleva avatar xq es el name del formulario de registro

module.exports = router;