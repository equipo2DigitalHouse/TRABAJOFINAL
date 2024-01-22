const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();
const PORT= process.env.PORT || 3002
const methodoverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv").config();

app.use(express.static("public"))
app.use(express.urlencoded({extended:false})) //nos permite capturar la informacion que viene por req.body en controllerRegister
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



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
const tragosRoutes = require("./src/routes/tragos");
const cookies = require("./src/routes/cookies");
const users = require("./src/routes/usersRoutes");
const shop = require("./src/routes/shopRoutes");
const executive = require("./src/routes/executiveRoutes");
const apiProducts = require("./src/routes/api/apiProducts");
const apiusers = require("./src/routes/api/apiUsers");
const apiPostulants = require('./src/routes/API/apiPostulants');
app.listen(PORT , () =>
console.log(`Servidor escuchando en puerto ${PORT}`));

app.use(session({ secret: "Secreto" }));
app.use('/avatars', express.static(path.join(__dirname, 'public/images/avatars/default')));

app.use(adminFormRoutes);
app.use(contactsRoutes);
app.use(forgotpswdRoutes);
app.use(indexRoutes);
app.use(listRoutes);
app.use(loginRoutes);
app.use(productsRoutes);
app.use(registerRoutes);
app.use(cookies);
app.use(users);
app.use(shop);
app.use(executive)
app.use(tragosRoutes);
app.use('/api/products', apiProducts)
app.use("/api/users", apiusers)
app.use('/api/postulants',apiPostulants);


app.use((req,res,next)=>{
    res.status(404).render(path.join(__dirname,"./src/views/not-found"));
})
