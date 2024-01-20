module.exports = (sequelize, dataTypes) => {
    let alias = 'Postulantes';
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        apellido:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        email:{
            type: dataTypes.STRING,
        },
        curriculum: {
            type: dataTypes.STRING,

        }
 
    };
    let config={
    
        tableName: 'postulantes',
        timestamps: false,
    }
    const Postulantes = sequelize.define(alias,cols,config)

    return Postulantes;
}
 
