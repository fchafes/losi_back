const { Model, DataTypes } = require("sequelize");


class OrderProduct extends Model {
  static initModel(sequelize) {
    OrderProduct.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // Puedes ajustar el valor predeterminado según tus necesidades
          },
        selectedSize:{
          type: DataTypes.STRING,
          allowNull: true,
        }
        
      },
      {
        sequelize,
        modelName: "orderProduct", // Nombre del modelo en singular y en minúscula.
      },
    );

    return OrderProduct;
  }
}

module.exports = OrderProduct;