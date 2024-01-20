const { Usuarios } = require("../database/models");

const adminCheck = (req, res, next) => {

    if (req.session.usuarioLogeado == undefined) {
        res.redirect("../home_login_error");
    } else {

        const userEmail = req.session.usuarioLogeado.email;

        // Consulta la base de datos para obtener el usuario por su correo electrónico
        Usuarios.findOne({ where: { email: userEmail } })
            .then(usuario => {
                // Verifica si el usuario tiene derechos de administrador (isAdmin igual a 1)
                if (usuario.isAdmin !== 1) {
                    res.send("Usted no tiene derechos de acceder a esta página");
                } else {
                    next();
                }
            })
            .catch(error => {
                console.error('Error al verificar derechos de administrador:', error);
                res.status(500).send('Error interno del servidor');
            });
    }
};

module.exports = adminCheck;

