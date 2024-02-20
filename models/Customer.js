const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Customer extends Model {
  static initModel(sequelize) {
    Customer.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        phone: {
          type: DataTypes.STRING, // URL
        },
        resetPasswordToken: {
          type: DataTypes.STRING,
        },
        resetPasswordExpires: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: "customer",
        hooks: {
          beforeCreate: async (customer, options) => {
            // Hash the password before saving it to the database
            const hashedPassword = await bcrypt.hash(customer.password, 10);
            Customer.password = hashedPassword;
          },
        }, // Nombre del modelo en singular y en minúscula.
      }
    );
    return Customer;
  }
}

module.exports = Customer;
