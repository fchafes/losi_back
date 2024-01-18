const { Model, DataTypes } = require("sequelize");



class Stock extends Model {
  static initModel(sequelize) {
    Stock.init(
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
        modelName: "stock", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Stock;
  }
}

module.exports = Stock;