const moment = require("moment");
const { User, userCategory } = require("../../database/models");

module.exports = {
    /*listado de usuarios para admins */
    list: async (req, res) => {
        try {
          const users = await User.findAll({ include: { all: true } });

            if (users.length > 0) {
              let results = {
                metadata: {
                  status: 200,
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