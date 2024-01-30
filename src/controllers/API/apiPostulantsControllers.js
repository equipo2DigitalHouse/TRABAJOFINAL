const {Postulantes} = require('../../database/models');
const {Op} = require('sequelize');

module.exports = {
    /* Muestra todos los productos */
    index : async (req,res) => {
        try {
            const postulantes = await Postulantes.findAll();
            if (postulantes.length >0) {
                let results = { 
                    count: {
                        // status:200,
                        quantity: postulantes.length
                    },
                    data: { postulantes }
                }
                res.json(results)
            }
        } catch(error){
              res.send(error);
              console.log(error);
        }
    },    detail: async (req, res) => {
        try {
            const {id} = req.params
            const postul = await Postulantes.findByPk(id);
          
            if (postul) {
              let results = {
                metadata: {
                  status: 200,
                },
                data: { postul }
              }
              res.json(results)
            }
        } catch (error) {
            console.log(error);
        }
    }
};


