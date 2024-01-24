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
<<<<<<< Updated upstream
      slug: "rowe-bedliner",
      categoryId: 2,
=======

      slug: "rizzo-night-fly",
      categoryId: 4,
    },
    {
      name: "Quasi x Vans Crockett Hi Decon",
      description: `leather`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/FW23PANTS-HATSMASTER_0043_Layer9_1024x1024.jpg?v=1696446466",
      price: 3828,
      featured: 1,
      slug: "quasi-x-vans-crockett-hi-decon",
      categoryId: 5,
>>>>>>> Stashed changes
    },
    {
      name: "Provo Full Zip Jacket",
      description: `■ High Pile Polar Fleece Shell
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
      slug: "k2-white",
      categoryId: 2,
    },
    {
      name: "Skateboard Marca Play",
      description: `Industria nacional`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/RIZZO_d19e66b0-ad4b-4625-ae3d-eceeb64783c4_1024x1024.jpg?v=1695238867/*",
      price: 2900,
      featured: 0,
<<<<<<< Updated upstream

      slug: "skateboard-marca-play",
      categoryId: 1,
    },
    {
      name: "Rizzo Night Fly 8.375",
      description: `Dick Rizzo Pro Model, 8.375" x 32.25", WB 14.25"`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/RIZZO_d19e66b0-ad4b-4625-ae3d-eceeb64783c4_1024x1024.jpg?v=1695238867/*",
      price: 2900,
      featured: 1,

=======
>>>>>>> Stashed changes
      slug: "rizzo-night-fly",
      categoryId: 4,
    },
    {
      name: "102 Jean [Washed Grey]",
      description: `■ Heavyweight 14oz Bio Washed Denim
      ■ Regular Fit, Straight Leg
      ■ 5-Pocket
      ■ Contrast stitch
      ■ 100% Cotton
      ■ Size chart included in additional images`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/102GREYFRONT_1024x1024.jpg?v=1695408138",
      price: 3828,
      featured: 0,
      slug: "102-jean-washed-grey",
      categoryId: 3,
    },
    {
      name: "Simulation VHS",
      description: `■ 'Simulation' VHS
      ■ Limited Edition
      ■ TRT: 00:31:24
      ■ NTSC
      ■ As Seen Online
      ■ Made in USA`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SIMULATIONFRONT_1024x1024.jpg?v=1695753802",
      price: 2013,
      featured: 0,
      slug: "simulation-vhs",
      categoryId: 5,
    },
    {
      name: "Spider Beanie",
      description: `■ Jacquard Knit
      ■ Flag Label
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SPIDEREGGPLANT_1024x1024.jpg?v=1695657375",
      price: 1289,
      featured: 0,
      slug: "spider-beanie",
      categoryId: 1,
    },
    {
      name: "Happiness Frisbee",
      description: `■ 70g Plastic
      ■ Made in USA
      ■ Be Happy`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/FRIZBEE_1024x1024.jpg?v=1684253089",
      price: 403,
      featured: 0,
      slug: "happiness-frisbee",
      categoryId: 1,
    },
    {
      name: "Vert Sock [Dark Teal + Off White]",
      description: `■ Jacquard Knit
      ■ Crew Sock
      ■ 100% Acrylic
      ■ One Size Fits Most
      ■ 2-Pack`,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/VERTSOCKS_1024x1024.jpg?v=1649349598",
      price: 1128,
      featured: 0,
      slug: "vert-sock-dark-teal-off-white",
      categoryId: 1,
    },
    {
      name: `Distilled, 8"`,
      description: `■ 8" x 32.375" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/DISTILLED8_1024x1024.jpg?v=1695238751",
      price: 2738,
      featured: 0,
      slug: "Distilled",
      categoryId: 4,
    },
    {
      name: "Jessup Sheet",
      description: `■ 33x9 Sheet of Jessup`,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/JESSUPGRIP_1024x1024.jpg?v=1647969564",
      price: 202,
      featured: 0,
      slug: "jessup-grip",
      categoryId: 4,
    },
    {
      name: "Warren Trouser Pant [Army Green]",
      description: `■ Midweight 11.5oz Reverse Sateen
      ■ Baggy Fit, Tapered Leg
      ■ Pleated Front
      ■ Damask Woven Label
      ■ 100% Cotton`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/WARRENGREENFRONT_1024x1024.jpg?v=1695408346",
      price: 4831,
      featured: 0,
      slug: "warren-trouser-pant",
      categoryId: 3,
    },
    {
      name: "Ultra Short [Forest]",
      description: `■ Lightweight Mesh
      ■ Fully Lined
      ■ Regular Fit
      ■ Elastic Waistband
      ■ Flat Woven Drawstring
      ■ Full Dye Sub Print
      ■ 100% Polyester`,
      photo: "https://quasiskateboards.com/cdn/shop/files/ULTRAFORESTFRONT_1024x1024.jpg?v=1684252972",
      price: 2416,
      featured: 0,
      slug: "ultra-short-forest",
      categoryId: 3,
    },
    {
      name: "Stoneage Sweater [Black]",
      description: `■ Heavyweight Yarn
      ■ Custom Jacquard Knit
      ■ Rib Knit Collar, Cuffs & Waistband
      ■ 100% Cotton`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/STONEAGESWEATERBLACK_1024x1024.jpg?v=1695242021",
      price: 4026,
      featured: 0,
      slug: "stoneage-sweater-black",
      categoryId: 2,
    },
    {
      name: "Everybody [Sand]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/EVERYBODYSAND_1024x1024.jpg?v=1695659619",
      price: 1289,
      featured: 0,
      slug: "everybody-sand",
      categoryId: 2,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
