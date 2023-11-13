const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminFormController = require("../controllers/adminFormControllers");
const adminCheck = require("../middlewares/admincheck");
// const session = require('express-session');


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb (null, path.join(__dirname, "../../public/images/barimages"))
    },
    filename:(req, file, cb) => {
        cb (null,`${Date.now()}_bar${path.extname(file.originalname)}`)
    },
})

const uploadBar = multer({storage})


// router.use(session({
//     secret: 'Secreto',
// }));

router.get("/adminform",adminCheck, adminFormController.adminForm);

router.post("/newproduct", uploadBar.single("image"),adminFormController.addNewProduct )




module.exports = router;