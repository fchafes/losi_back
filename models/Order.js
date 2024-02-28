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
        order_state: {
          type: DataTypes.STRING,
        },
        payment_method:{
          type: DataTypes.STRING
        },
        shipping_address: {
          type: DataTypes.STRING
        },
        collection_id: {
          type: DataTypes.STRING,
        },
        collection_status:{
          type: DataTypes.STRING,
        },
        payment_id:{
          type: DataTypes.STRING,
        },
        status:{
          type: DataTypes.STRING,
        },
        payment_type :{
          type: DataTypes.STRING
        },
        merchant_order_id: {
          type: DataTypes.STRING,
        },
        preference_id:{
          type: DataTypes.STRING,
        },
        merchant_account_id:{
          type: DataTypes.STRING,
        }


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
