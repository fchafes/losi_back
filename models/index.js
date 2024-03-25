const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

// Requerir todos los modelos:
const Customer = require("./Customer");
const Order = require("./Order");
const Product = require("./Product");
const Admin = require("./Admin");
const Category = require("./Category");
const OrderProduct = require("./OrderProduct");
const Size = require("./Size");
const Stock = require("./Stock");

// Inicializar todos los modelos:
Customer.initModel(sequelize);
Admin.initModel(sequelize);
Product.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);
OrderProduct.initModel(sequelize);
Size.initModel(sequelize);
Stock.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 *
 * Por ejemplo, si un User está relacionado con un Article, establecerlo
 * aquí abajo.
 */
Customer.hasMany(Order);
Order.belongsTo(Customer);
Product.belongsTo(Category);
Category.hasMany(Product);
Order.belongsToMany(Product, { through: "orderProduct" });
Product.belongsToMany(Order, { through: "orderProduct" });
Product.belongsToMany(Size, { through: "stock", as: "stocks" });
Size.belongsToMany(Product, { through: "stock" });

// OrderProduct.belongsTo(Size)

module.exports = {
  sequelize,
  Order,
  Product,
  Category,
  Admin,
  Customer,
  OrderProduct,
  Size,
  Stock,
};
