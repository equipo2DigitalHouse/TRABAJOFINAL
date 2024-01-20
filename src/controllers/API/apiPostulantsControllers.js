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
    },
    // detail: async (req,res) => {
    //     try {
    //         const {id} = req.params;
    //         const productDetail = await Postulantes.findByPk(id, {
    //             include: ['Category']
    //         });   
    //         if(productDetail){
    //             let results = { 
    //                 metadata:{
    //                   status:200,
    //                  },
    //                  data:{ productDetail }
    //             }
            
    //             res.json(results)
    //         };
            
    //     } catch (error) {
    //         res.send(error);
    //         console.log(error); 
    //     }
    // },
}

