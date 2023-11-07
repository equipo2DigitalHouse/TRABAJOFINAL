const path = require("path");
const loginController = {
    login: (req, res) =>{
        res.render(path.join(__dirname,"../views/login"))
    },
    
login: (req, res) => {
        
    return res.render ('login');
},

loginProcess: (req, res) =>  {
    const userToLogin = User.findByField('email', req.body.email);
    if(userToLogin) {
    }
    return res.send(userToLogin);
    
},
};

module.exports = loginController;