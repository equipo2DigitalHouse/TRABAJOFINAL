module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorias';
    let cols={
        id_empleado:{
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
        ocupacion: {
            type:dataTypes.STRING
        }
 
    };
    let config={
    
        tableName: 'categoria_empleados',
        timestamps: false,
    }
    const Categorias = sequelize.define(alias,cols,config)

    return Categorias;
}
 
