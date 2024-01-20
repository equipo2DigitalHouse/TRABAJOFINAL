// const moment = require("moment");
const {Usuarios} = require("../../database/models");
const {op} = require('sequelize');

module.exports = {
  
    /*listado de usuarios para adminis */
    index: async (req, res) => {
        try {
          const users = await Usuarios.findAll();

            if (users.length > 0) {
              let results = {
                count: {
                  // status: 200,
                  quantity: users.length
                },
                data: { users }
              }
              res.json(results)
            }
        } catch (error) {
            console.log(error);
        }
    },
 
    detail: async (req, res) => {
        try {
            const {id} = req.params
            const user = await User.findByPk(id, { include: { all: true } });
          
            if (user) {
              let results = {
                metadata: {
                  status: 200,
                },
                data: { user }
              }
              res.json(results)
            }
        } catch (error) {
            console.log(error);
        }
    }
};