const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Rizzo Night Fly 8.375",
      description: `Dick Rizzo Pro Model, 8.375" x 32.25", WB 14.25"`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/RIZZO_d19e66b0-ad4b-4625-ae3d-eceeb64783c4_1024x1024.jpg?v=1695238867/*",
      price: 2900,
    //   stock: 8,
      featured: 1,
      sizes: [{ size: `8.375" x 32.25", WB 14.25"`, stock: 8 },
      {size: `8.01` , }
    ],
      slug: "rizzo-night-fly",
    },
    // {
    //     name: "Quasi x Vans Crockett Hi Decon" ,
    //     description:`leather` ,
    //     photo: "https://quasiskateboards.com/cdn/shop/files/FW23PANTS-HATSMASTER_0043_Layer9_1024x1024.jpg?v=1696446466",
    //     price: 3828,
    //     stock: 20,
    //     featured: 0 ,
    //     sizes: `M`,
    //     slug: "rizzo-night-fly",

    // },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Articles.");
};
