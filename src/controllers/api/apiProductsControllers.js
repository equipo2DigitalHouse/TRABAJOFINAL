const {Productos} = require('../../database/models');
const {Op} = require('sequelize');

module.exports = {
    /* Muestra todos los productos */
    index : async (req,res) => {
        try {
            const products = await Productos.findAll();
            if (products.length >0) {
                let results = { 
                    count: {
                        // status:200,
                        quantity: products.length
                    },
                    data: { products }
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
            const productDetail = await Product.findByPk(id, {
                
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

