const express = require("express");
const router = express.Router();
const multer = require ('multer')
const path = require ('path')

const storage = multer.diskStorage({ //ojo con esto que va en otro lado
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/avatars'))
  },
  filename: (req, file, cb) => {
    let  fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName); 
  }
});



const uploadFile= multer ({ storage });
const { body } = require ('express-validator') //tambièn se la conoce como variable check, son lo mismo, pero body
// es mas asociable a la idea de validar el formulario

 const validations= [
body('name').notEmpty().withMessage('Escribe tu nombre'),
body('surname').notEmpty().withMessage('Escribe tu apellido'),
body('Email').notEmpty().withMessage('Escribe tu Email').bail()
.isEmail().withMessage('Debes escribir un formato de correo electrónico válido'),
body('userName').notEmpty().withMessage('Escribe tu nombre de usuario'),
body('avatar').notEmpty().withMessage('Selecciona tu foto de perfil'),
body('password').notEmpty().withMessage('Escribe tu contraseña'),
body('avatar').custom((value, { req }) => {
let file = req.file;
      

if (!file) {
throw new Error ('Tienes que cargar una imagen');
}
return true;
})
]


const registerController = require("../controllers/registerControllers");

router.get("/register", registerController.register)
//ruta de posteo para la suba de imagen de perfil 
router.post("/register",uploadFile.single("avatar"),validations, registerController.processRegister) 
//lleva avatar xq es el name del formulario de registro

module.exports = router;
