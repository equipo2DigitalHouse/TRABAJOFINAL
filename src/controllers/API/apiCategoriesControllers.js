const {Categorias} = require('../../database/models');
const {Op} = require('sequelize');

module.exports = {
    /* Muestra todos los productos */
    index : async (req,res) => {
        try {
            const categoria_empleados = await Categorias.findAll();
            if (categoria_empleados.length >0) {
                let results = { 
                    metadata: {
                        status:200,
                        quantity: categoria_empleados.length
                    },
                    data: { categoria_empleados }
                }
                res.json(results)
            }
        } catch(error){
              res.send(error);
              console.log(error);
        }
    },
     detail: async (req,res) => {
         try {
             const {id} = req.params;
             const productDetail = await Postulantes.findByPk(id, {
                 include: ['Category']
             });   
             if(productDetail){
                 let results = { 
                     metadata:{
                       status:200,
                      },
                      data:{ productDetail }
                 }
            
                 res.json(results)
             };
            
         } catch (error) {
             res.send(error);
             console.log(error); 
         }
     },
}

