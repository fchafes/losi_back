const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        state: {
          type: DataTypes.STRING,
        },
        payment_method:{
          type: DataTypes.STRING
        },
        shipping_address: {
          type: DataTypes.STRING
        },
      },
      {
        sequelize,
        modelName: "order", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Order;
  }
}

module.exports = Order;
