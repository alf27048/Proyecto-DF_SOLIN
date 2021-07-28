module.exports = (sequelize, DataTypes) => {
    const Img = sequelize.define('imagen', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foto: DataTypes.STRING(100)
        },
    {
        freezeTableName: true,
        timestamps: false
    });
    Img.associate = (models) => {
        Img.belongsTo(models.producto);
    };

    return Img;

}