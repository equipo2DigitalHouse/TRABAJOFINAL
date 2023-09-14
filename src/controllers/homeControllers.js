const path = require('path');

const homeController = {
    home: (req, res)=> {
        res.render(path.join(__dirname, '../views/home'))
    },
    
   };

// console.log(this.home, __dirname);

module.exports = homeController