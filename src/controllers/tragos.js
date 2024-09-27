const path = require("path");

const tragosController = {
  tragosView: (req, res) => {
    res.render(path.join(__dirname, "../views/tragos"));
  },
};

module.exports = tragosController;