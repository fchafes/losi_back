const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.TEXT,
        },
        photo: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.INTEGER,
        },
        
        featured: {
          type: DataTypes.BOOLEAN,
        },
        sizes: {
          type: DataTypes.JSON,
        },
        slug: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "product", // Nombre del modelo en singular y en minúscula.
      }
    );

    return Product;
  }
}

module.exports = Product;
