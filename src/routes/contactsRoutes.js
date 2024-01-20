const express = require("express");
const router = express.Router();
const multer = require ('multer')
const path = require ('path')

const contactsController = require("../controllers/contactsControllers");
router.get ("/contacts", contactsController.contactos)

const storage = multer.diskStorage({ //ojo con esto que va en otro lado
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/images/CV'))
    },
    filename: (req, file, cb) => {
      let  fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName); 
    }
  });
  
  
   
  const uploadFile= multer ({ storage });
router.post ("/contacts", uploadFile.single("cvHere"),contactsController.processPostulant)
module.exports = router;