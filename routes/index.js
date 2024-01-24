/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const customerRoutes = require("./customerRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes")
const categoryRoutes = require("./categoryRoutes")


module.exports = (app) => {
  /**
   * Al construir una API REST, la convención es que las rutas relativas a los
   * usuarios se agrupen bajo la URL `/users` (en inglés y en plural). Del
   * mismo modo, las rutas relativas a los artículos se debería agrupar bajo
   * la URL `/articles` (en inglés y en plural).
   */
  app.use("/customers", customerRoutes);
  app.use("/products", productRoutes);
  app.use("/admin", adminRoutes);
  app.use("/orders", orderRoutes);
  app.use("/category", categoryRoutes);

};
