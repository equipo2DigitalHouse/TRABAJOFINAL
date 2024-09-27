module.exports = (sequelize, dataTypes) => {
    let alias = "Ventas"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        date: {
            type: dataTypes.DATE
        },
        direccion_de_facturacion: {
            type: dataTypes.TEXT
        },
        ciudad_de_facturacion: {
            type: dataTypes.TEXT
        },
        estado_o_provincia_de_facturacion : {
            type : dataTypes.TEXT
        },
        codigo_postal_de_facturacion : {
            type: dataTypes.TEXT
        },
        total : {
            type: dataTypes.NUMBER
        }

    };
    let config = {
        tableName: "ventas",
        timestamps: false        
    };

    const Ventas = sequelize.define(alias, cols, config);

    Ventas.associate = (models) => {
        Ventas.belongsTo(models.Usuarios,{
            as : "ventas",
            foreignKey: "id_usuario",
            timestamps: false
        });
        Ventas.belongsTo(models.Productos,{
            as : "productos",
            foreignKey: "id_producto",
            timestamps: false
        });
    }
    

    return Ventas;
};
