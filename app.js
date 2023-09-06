const express = require("express");
const path = require("path");
const app = express();
const PORT= process.env.PORT || 3002
app.use(express.static("public"))

app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","home.html"))
})

app.get("/login",function(req,res) {
res.sendFile(path.join(__dirname,"sesion","login.html"))
})

app.get("/sesion/forgotpswd",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","forgotpswd.html"))
})

app.get("/sesion/register",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","register.html"))
})


app.get("/sesion/listado",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","listado.html"))
})

app.get("/sesion/contactos",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","contactos.html"))
})

app.get("/sesion/index",function(req,res) {
    res.sendFile(path.join(__dirname,"sesion","index.html"))
})


app.listen(PORT , () =>
console.log(`Servidor escuchando en puerto ${PORT}`));