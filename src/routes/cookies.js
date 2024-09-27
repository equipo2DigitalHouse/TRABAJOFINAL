const express = require("express");
const router = express.Router();

router.get("/cookies", (req,res) => {
    if(req.session.numeroDeVisitas == undefined){
        req.session.numeroDeVisitas = 0
    }
    req.session.numeroDeVisitas ++;
    res.send("session tiene el número " + req.session.numeroDeVisitas)
});

module.exports = router;