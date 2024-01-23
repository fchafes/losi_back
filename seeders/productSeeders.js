const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Rowe 'Bedliner' [8.5]",
      description: `■ Jon Rowe Pro Model
      ■ 8.5" x 32.125" WB 14.25"
      ■ Full Dip Painted Deck
      ■ Manufactured at PS Stix
      ■ Artwork by Max Matoon`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/ROWE_d920556c-16bc-4ef5-8134-e95f13366990_1024x1024.jpg?v=1695238977",
      price: 2899,
      featured: 1,
      slug: "rowe-bedliner",
      categoryId: 2,
    },
    {
      name: "Provo Full Zip Jacket",
      description: `leather■ High Pile Polar Fleece Shell
      ■ Mesh Lining
      ■ Full Zip Front
      ■ Half Collar
      ■ Raglan Sleeves
      ■ Elastic Sleeve Cuffs
      ■ Chest & Side Pockets
      ■ Fabric Zipper Pull Tabs
      ■ Damask Woven Chest Label
      ■ 100% Polyester`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/PROVOJACKET_1024x1024.jpg?v=1695242004",
      price: 5238,
      featured: 1,
      slug: "provo-full-zip-jacket",
      categoryId: 2,
    },
    {
      name: "K2 [White]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/K2WHITE_1024x1024.jpg?v=1695659584",
      price: 1289,
      featured: 1,
      slug: "provo-full-zip-jacket",
      categoryId: 2,
    },
    {
      name: "Skateboard Marca Play",
      description: `Industria nacional`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/RIZZO_d19e66b0-ad4b-4625-ae3d-eceeb64783c4_1024x1024.jpg?v=1695238867/*",
      price: 2900,
      featured: 0,

      slug: "rizzo-night-fly",
      categoryId: 1,
    },
    {
      name: "Rizzo Night Fly 8.375",
      description: `Dick Rizzo Pro Model, 8.375" x 32.25", WB 14.25"`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/RIZZO_d19e66b0-ad4b-4625-ae3d-eceeb64783c4_1024x1024.jpg?v=1695238867/*",
      price: 2900,
      featured: 1,

      slug: "rizzo-night-fly",
      categoryId: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
