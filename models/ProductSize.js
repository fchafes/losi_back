const { Model, DataTypes } = require("sequelize");



class ProductSize extends Model {
  static initModel(sequelize) {
    ProductSize.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        stock:{
          type:  DataTypes.INTEGER
        }
      },
      {
        sequelize,
        modelName: "productSize", // Nombre del modelo en singular y en minúscula.
      },
    );

    return ProductSize;
  }
}

module.exports = ProductSize;