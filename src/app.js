const express = require("express");
const morgan = require('morgan');
const path = require('path');
const server = express();

server.use(morgan('dev'));
server.set ('view engine', 'ejs')
server.use(express.static(path.join(__dirname, '../public')))


const homeRouter = require('./routes/homeRoutes');

server.use('/', homeRouter)
// server.use(homeRoutes);


// app.get("/",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","home.html"))
// })

// app.get("/login",function(req,res) {
// res.sendFile(path.join(__dirname,"views","login.html"))
// })

// app.get("/views/forgotpswd",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","forgotpswd.html"))
// })

// app.get("/views/register",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","register.html"))
// })


// app.get("/views/listado",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","listado.html"))
// })

// app.get("/views/contactos",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","contactos.html"))
// })

// app.get("/views/index",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })


module.exports = server;