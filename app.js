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

const forgotpswdRouter = require("./src/routes/forgotpswdRoutes")
app.use("/forgotpswd", forgotpswdRouter)

const registerRouter = require("./src/routes/registerRoutes")
app.use("/register", registerRouter)

const listadoRouter = require("./src/routes/listadoRoutes")
app.use("/listado", listadoRouter)

const contactosRouter = require("./src/routes/contactosRoutes")
app.use("/contactos", contactosRouter)

const indexRouter = require("./src/routes/indexRoutes")
app.use("/index", indexRouter)
//hola
app.listen(PORT , () =>
console.log(`Servidor escuchando en puerto ${PORT}`));