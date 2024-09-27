module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.TEXT
        },
        user_name: {
            type: dataTypes.TEXT
        },
        password: {
            type: dataTypes.TEXT
        },
        isAdmin : {
            type : dataTypes.INTEGER
        },
        avatar : {
            type: dataTypes.TEXT
        }

    };
    let config = {
        tableName: "usuarios",
        timestamps: false        
    };

    const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = (models) => {
        Usuarios.hasMany(models.Ventas,{
            as : "ventas",
            foreignKey: "id_usuario",
            timestamps: false
        });
    }

    return Usuarios;
};
