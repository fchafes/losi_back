const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
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
      },
      {
        sequelize,
        modelName: "admin",
        hooks: {
          beforeCreate: async (admin, options) => {
            console.log("Before create hook triggered"); 
            // Hash the password before saving it to the database
            const hashedPassword = await bcrypt.hash(admin.password, 10);
            admin.password = hashedPassword;
          },
        },
      }
    );
    return Admin;
  }
}

module.exports = Admin;
