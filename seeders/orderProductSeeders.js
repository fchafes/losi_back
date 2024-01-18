/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 *
 *
 */

const { OrderProduct } = require("../models");

module.exports = async () => {
  const orderProducts = [
    {
      quantity: 2,
      orderId: 2,
      productId: 3,
    },
    {
      quantity:1,
      orderId: 4,
      productId: 2,
    },
    {
      quantity: 1,
      orderId: 5,
      productId: 1,
    },
    {
      quantity: 2,
      orderId: 3,
      productId: 2,
    },
    {
      quantity: 1,
      orderId: 1,
      productId: 2,
    },
    {
      quantity: 1,
      orderId: 4,
      productId: 3,
    },
  ];

  await OrderProduct.bulkCreate(orderProducts);
  console.log("[Database] Se corrió el seeder de OrderProduct.");
};
