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

const { Stock } = require("../models");

module.exports = async () => {
  const stock = [
    {
      stock: 10,
      productId: 1,
      sizeId: 8,
    },

    {
      stock: 10,
      productId: 2,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 3,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 3,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 3,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 3,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 4,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 4,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 4,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 4,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 5,
      sizeId: 5,
    },
    {
      stock: 10,
      productId: 6,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 6,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 6,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 6,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 7,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 8,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 9,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 10,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 11,
      sizeId: 5,
    },
    {
      stock: 10,
      productId: 12,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 13,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 13,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 13,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 13,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 14,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 14,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 14,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 14,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 15,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 15,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 15,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 15,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 16,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 16,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 16,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 16,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 17,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 18,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 19,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 20,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 21,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 22,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 23,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 24,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 25,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 26,
      sizeId: 5,
    },
    {
      stock: 10,
      productId: 27,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 28,
      sizeId: 6,
    },
    {
      stock: 10,
      productId: 29,
      sizeId: 6,
    },
    {
      stock: 10,
      productId: 30,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 31,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 32,
      sizeId: 6,
    },
    {
      stock: 10,
      productId: 33,
      sizeId: 7,
    },
    {
      stock: 10,
      productId: 34,
      sizeId: 6,
    },
    {
      stock: 10,
      productId: 35,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 36,
      sizeId: 5,
    },
    {
      stock: 10,
      productId: 37,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 38,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 39,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 40,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 41,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 42,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 43,
      sizeId: 8,
    }, {
      stock: 10,
      productId: 44,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 45,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 46,
      sizeId: 8,
    },
    {
      stock: 10,
      productId: 47,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 47,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 47,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 47,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 48,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 48,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 48,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 48,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 49,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 49,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 49,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 49,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 50,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 50,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 50,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 50,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 51,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 51,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 51,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 51,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 52,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 52,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 52,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 52,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 53,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 53,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 53,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 53,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 54,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 54,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 54,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 54,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 55,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 55,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 55,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 55,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 56,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 56,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 56,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 56,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 57,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 57,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 57,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 57,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 58,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 58,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 58,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 58,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 59,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 59,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 59,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 59,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 60,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 60,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 60,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 60,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 61,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 61,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 61,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 61,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 62,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 62,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 62,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 62,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 63,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 63,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 63,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 63,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 64,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 64,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 64,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 64,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 65,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 65,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 65,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 65,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 66,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 66,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 66,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 66,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 67,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 67,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 67,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 67,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 68,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 68,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 68,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 68,
      sizeId: 4,
    },
    {
      stock: 10,
      productId: 69,
      sizeId: 1,
    },
    {
      stock: 10,
      productId: 69,
      sizeId: 2,
    },
    {
      stock: 10,
      productId: 69,
      sizeId: 3,
    },
    {
      stock: 10,
      productId: 70,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 71,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 72,
      sizeId: 10,
    },
    {
      stock: 10,
      productId: 73,
      sizeId: 10,
    },
  ];

  await Stock.bulkCreate(stock);
  console.log("[Database] Se corrió el seeder de Stock.");
};
