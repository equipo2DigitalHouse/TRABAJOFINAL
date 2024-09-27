const db = require("../database/models");
const path = require("path");

const getProductById = (req, res) => {
    const { id } = req.params;

    db.Productos.findByPk(id)
        .then((product) => {
            if (!product) {
                return res.send('Product not found');
            }

            const form = path.join(__dirname, "../views/product");
            res.render(form, { product });
        })
        .catch((error) => {
            console.log(error)
        });
};

module.exports = getProductById;




// const getProductById = (req,res) => {
//     const { id } = req.params;

//     const product = products.find((prod) => prod.id == id );

//     if(!product){
//         return res.send('Product not found');
//     }

//     const form = path.join(__dirname,"../views/product")
//     res.render(form,{ product })
// }