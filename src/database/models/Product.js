module.exports = (sequelize, dataTypes) => {
    let alias = "Productos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT
        },
        image: {
            type: dataTypes.TEXT
        },
        date: {
            type: dataTypes.DATE
        },
        price: {
            type: dataTypes.FLOAT
        }, 
    };
    let config = {
        tableName: "productos",
        timestamps: false        
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = (models) => {
        Productos.hasMany(models.Ventas,{
            as : "productos",
            foreignKey: "id_producto",
            timestamps: false
        });
    }

    return Productos;
};
