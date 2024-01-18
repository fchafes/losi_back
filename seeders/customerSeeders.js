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
 *
 * En este ejemplo se están insertando 100 usuarios con nombres ficticios.
 *
 */

const faker = require("@faker-js/faker").fakerES;
const { Customer } = require("../models");

module.exports = async () => {
  const customers = [];
  customers.push({
    firstname: "Customer",
    lastname: "Nuñez",
    password: "customer",
    email: "customer@customer.com",
    address: "acevedo diaz 2222",
    phone: "098765234"
   
  });

  for (let i = 0; i < 20; i++) {
    customers.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address:faker.location.streetAddress(),
      phone:faker.phone.number()
    });
  }

  await Customer.bulkCreate(customers);
  console.log("[Database] Se corrió el seeder de Customers.");
};
