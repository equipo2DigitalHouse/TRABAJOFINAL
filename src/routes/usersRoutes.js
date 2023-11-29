const express = require("express");
const router = express.Router();
const getAllUsers = require("../controllers/getAllUsers");
router.get("/users", getAllUsers.list)

module.exports = router;