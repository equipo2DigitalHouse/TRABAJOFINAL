const express = require("express");
const path = require("path");
const app = express();
const PORT= process.env.PORT || 3002
const methodoverride = require("method-override");
const morgan = require("morgan")

app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'));
app.set("view engine", "ejs")

app.use(methodoverride("_method"));

const homeRouter = require("./src/routes/homeRoutes")
app.use("/", homeRouter)


const adminFormRoutes = require("./src/routes/adminFormRoutes");
const forgotpswdRoutes = require("./src/routes/forgotpswdRoutes");
const indexRoutes = require("./src/routes/indexRoutes");
const listRoutes = require("./src/routes/listRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const registerRoutes = require("./src/routes/registerRoutes");
const contactsRoutes = require("./src/routes/contactsRoutes");

app.listen(PORT , () =>
console.log(`Servidor escuchando en puerto ${PORT}`));

app.use(adminFormRoutes);
app.use(contactsRoutes);
app.use(forgotpswdRoutes);
app.use(indexRoutes);
app.use(listRoutes);
app.use(loginRoutes);
app.use(productsRoutes);
app.use(registerRoutes);

