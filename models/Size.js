const { Model, DataTypes } = require("sequelize");



class Size extends Model {
  static initModel(sequelize) {
    Size.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        sizes: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
      },
      {
        sequelize,
        modelName: "size", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Size;
  }
}

module.exports = Size;