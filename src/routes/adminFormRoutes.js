const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminFormController = require("../controllers/adminFormControllers");
const adminCheck = require("../middlewares/admincheck");
const getAllProducts = require("../controllers/getAllProducts")

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb (null, path.join(__dirname, "../../public/images/barimages"))
    },
    filename:(req, file, cb) => {
        cb (null,`${Date.now()}_bar${path.extname(file.originalname)}`)
    },
})


const uploadBar = multer({storage})


router.get("/adminform",adminCheck, adminFormController.adminForm);
//adminCheck,
router.post("/products", uploadBar.single("image"),getAllProducts.create )



module.exports = router;