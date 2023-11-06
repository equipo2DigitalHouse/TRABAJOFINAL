const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminFormController = require("../controllers/adminFormControllers");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb (null, path.join(__dirname, "../../public/images/barimages"))
    },
    filename:(req, file, cb) => {
        cb (null,`${Date.now()}_bar${path.extname(file.originalname)}`)
    },
})

const uploadBar = multer({storage})



router.get("/adminform", adminFormController.adminForm);
router.post("/newproduct", uploadBar.single("image"),adminFormController.addNewProduct )




module.exports = router;