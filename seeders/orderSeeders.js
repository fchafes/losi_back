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

const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      customerId: 2,
      order_state: "Confirmed",
      payment_method: "Mercado Pago",
    },
    {
      customerId: 4,
      order_state: "Processing",
      payment_method: "Credit Card",
    },
    {
      customerId: 8,
      order_state: "Pending",
      payment_method: "PayPal",
    },
    {
      customerId: 1,
      order_state: "Cancelled",
      payment_method: "Credit Card",
    },
    {
      customerId: 6,
      order_state: "In Transit",
      payment_method: "PayPal",
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
