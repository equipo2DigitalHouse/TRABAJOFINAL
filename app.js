const express = require("express");
const path = require("path");
const app = express();
const PORT= process.env.PORT || 3002
app.use(express.static("public"))

app.set("view engine", "ejs")


const homeRouter = require("./src/routes/homeRoutes")
app.use("/", homeRouter)


const loginRouter = require("./src/routes/loginRoutes")
app.use("/login", loginRouter)

// app.get("/login",function(req,res) {
// res.sendFile(path.join(__dirname,"views","login.html"))
// })

const forgotpswdRouter = require("./src/routes/forgotpswdRoutes")
app.use("/forgotpswd", forgotpswdRouter)

// app.get("/views/forgotpswd",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","forgotpswd.html"))
// })

const registerRouter = require("./src/routes/registerRoutes")
app.use("/register", registerRouter)
// app.get("/views/register",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","register.html"))
// })
const listadoRouter = require("./src/routes/listadoRoutes")
app.use("/listado", listadoRouter)

// app.get("/views/listado",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","listado.html"))
// })
const contactosRouter = require("./src/routes/contactosRoutes")
app.use("/contactos", contactosRouter)
// app.get("/views/contactos",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","contactos.html"))
// })
const indexRouter = require("./src/routes/indexRoutes")
app.use("/index", indexRouter)
// app.get("/views/index",function(req,res) {
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })


app.listen(PORT , () =>
console.log(`Servidor escuchando en puerto ${PORT}`));