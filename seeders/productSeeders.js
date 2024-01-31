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
      categoryId: 5,
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
      photo:
        "https://quasiskateboards.com/cdn/shop/files/ULTRAFORESTFRONT_1024x1024.jpg?v=1684252972",
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
    {
      name: "Spider Beanie [Sand]",
      description: `■ Jacquard Knit
      ■ Flag Label
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SPIDERSAND_1024x1024.jpg?v=1695657362",
      price: 1289,
      featured: 0,
      slug: "spider-beanie-sand",
      categoryId: 1,
    },
    {
      name: "Palisades Beanie [White]",
      description: `■ Jacquard Knit
      ■ Flag Label
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/PALISADESWHITEFRONT_1024x1024.jpg?v=1695657415",
      price: 1289,
      featured: 0,
      slug: "palisades-beanie-white",
      categoryId: 1,
    },
    {
      name: "Lynk Beanie [Plum]",
      description: `■ Jacquard Knit
      ■ Flag Label
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/LYNKPLUM_1024x1024.jpg?v=1676923598",
      price: 1289,
      featured: 0,
      slug: "lynk-beanie-plum",
      categoryId: 1,
    },
    {
      name: "Petal Beanie [Olive]",
      description: `■ Jacquard Knit
      ■ Flag Label
      ■ Skull Cap
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/PETALBEANIE_aa77cc0e-794d-41bc-a1cf-d1c1eb9d7fc1_1024x1024.jpg?v=1676925148",
      price: 1289,
      featured: 0,
      slug: "petal-beanie-oliva",
      categoryId: 1,
    },
    {
      name: "Remember Tote [Natural]",
      description: `■ 12oz Canvas
      ■ Reinforced Bottom
      ■ 26” Webbed Handles
      ■ 100% Cotton
      ■ Screenprinted`,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/0026_REMEMBERTOTENAT_1024x1024.jpg?v=1665600986",
      price: 1089,
      featured: 0,
      slug: "remember-tote-natural",
      categoryId: 1,
    },
    {
      name: "Seneca Beanie [Sherbert]",
      description: `■ Jacquard Knit
      ■ Direct Embroidery
      ■ 100% Acrylic`,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SU23DECKMASTER-Recovered.psd_0000s_0001_Layer1_1024x1024.jpg?v=1686082013",
      price: 1289,
      featured: 0,
      slug: "seneca-beanie-sherbert",
      categoryId: 1,
    },
    {
      name: "Arcana Bag [Black]",
      description: `■ Midsized Daypack
      ■ 600D Polyester Shell
      ■ Dual Compartment
      ■ Outer Patch Pocket
      ■ Padded Mesh Back
      ■ Adjustable Sternum Strap
      ■ Removeable Keychain
      ■ Cord Access Eyelet
      ■ 3D PVC Logo
      ■ 100% Polyester
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BAGFRONT_1024x1024.jpg?v=1684253195",
      price: 4319,
      featured: 0,
      slug: "arcana-bag-black",
      categoryId: 1,
    },
    {
      name: "Stoneage Beanie [Blue Grey]",
      description: `■ Jacquard Knit
      ■ Skull Cap
      ■ 100% Acrylic
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/STONEAGEBEANIE_1024x1024.jpg?v=1695657252",
      price: 2019,
      featured: 0,
      slug: "stoneage-beanie-bluegrey",
      categoryId: 1,
    },
    {
      name: "Otis Beanie [Black & White]",
      description: `■ Jacquard Knit
      ■ Skull Cap
      ■ 100% Acrylic
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/OTIS_1024x1024.jpg?v=1666192175",
      price: 2019,
      featured: 0,
      slug: "otis-beanie-blackwhite",
      categoryId: 1,
    },
    {
      name: "Bledsoe 'Surface' [8.375”]",
      description: `■ Tyler Bledsoe Pro Model
      ■ 8.375" x 32.25" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Full Dip Painted Deck
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BLEDSOE_c9d679b2-63b1-439b-87db-52135b14a0c2_1024x1024.jpg?v=1695238694",
      price: 3519,
      featured: 0,
      slug: "bledsoe-surface",
      categoryId: 4,
    },
    {
      name: "Barker '3' [8.5]",
      description: `■ Dane Barker Pro Model
      ■ 8.5" x 32.125" WB 14.25"
      ■ Manufactured at PS Stix
      Griptape
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BARKER_a908c281-9d86-4c87-9d9c-24148f06bbc5_1024x1024.jpg?v=1695238681",
      price: 3519,
      featured: 0,
      slug: "barker",
      categoryId: 4,
    },
    {
      name: "de Keyzer 'Stoned' [8.25]",
      description: `■ Bobby de Keyzer Pro Model
      ■ 8.25" x 32.375" WB 14.375"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BOBBYSTONE_1024x1024.jpg?v=1695238738",
      price: 3519,
      featured: 0,
      slug: "de-keyzer-stoned",
      categoryId: 4,
    },
    {
      name: "Henry 'Dreamer' [8.25]",
      description: `■ Justin Henry Pro Model
      ■ 8.25" x 32.125" WB 14.25"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/HENRY_cc1c7a64-84a3-4ba8-90e4-0fa21e44558f_1024x1024.jpg?v=1695238771",
      price: 3519,
      featured: 0,
      slug: "henry-dreamer",
      categoryId: 4,
    },
    {
      name: "Crockett 'Screamer' [8.5]",
      description: `■ Gilbert Crockett Pro Model
      ■ 8.5" x 33" WB 14.5"
      ■ Manufactured at PS Stix
      ■ Full Dip Painted Deck
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/CROCKETT_ad291665-47ac-4f45-8d41-12aff51bddac_1024x1024.jpg?v=1695238728",
      price: 3519,
      featured: 0,
      slug: "crockett-screamer",
      categoryId: 4,
    },
    {
      name: "Johnson 'Clairvoyant' [8.5]",
      description: `■ Jake Johnson Pro Model
      ■ 8.5" x 33" WB 14.5"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/JOHNSON_20406a82-b851-4860-8e50-84d7e3c5f326_1024x1024.jpg?v=1695238830",
      price: 3519,
      featured: 0,
      slug: "johnson-clairvoytant",
      categoryId: 4,
    },
    {
      name: "Wilson 'Mister Happy' [8.25]",
      description: `■ Josh Wilson Pro Model
      ■ 8.25" x 31.8" WB 14"
      ■ Manufactured at BBS
      ■ Chrome Foil Bottom
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/WILSON_ac9797d8-1883-4d4b-8d53-33fb5a9610a3_1024x1024.jpg?v=1695238988",
      price: 3519,
      featured: 0,
      slug: "wilson-mister-happy",
      categoryId: 4,
    },
    {
      name: "Lowercase [8.375”]",
      description: `■ 8.375" x 31.75" WB 14.25"
      ■ Manufactured at BBS
      ■ Twin Tail Shape
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/LOWERCASE8.3_1024x1024.jpg?v=1695238855",
      price: 3519,
      featured: 0,
      slug: "lowercase",
      categoryId: 4,
    },
    {
      name: "Proto [8.25]",
      description: `■ 8.25" x 32.125" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Roll the Dice
      ■ Assorted Paint Fade Bottom
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/PROTO8.25-3_1024x1024.jpg?v=1695240155",
      price: 3519,
      featured: 0,
      slug: "proto",
      categoryId: 4,
    },
    {
      name: "Mother [8.625”]",
      description: `■ 8.625" x 33" WB 14.75"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/MOTHER8.6_1024x1024.jpg?v=1695239318",
      price: 3519,
      featured: 0,
      slug: "mother",
      categoryId: 4,
    },
    {
      name: "Time [8.125]",
      description: `■ 8.125" x 31.75" WB 14.125"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry  
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/TIME8.1_1024x1024.jpg?v=1695240216",
      price: 3519,
      featured: 0,
      slug: "time",
      categoryId: 4,
    },
    {
      name: "Distilled [8]",
      description: `■ 8" x 32.375" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/DISTILLED8_1024x1024.jpg?v=1695238751",
      price: 3519,
      featured: 0,
      slug: "distilled",
      categoryId: 4,
    },
    {
      name: "Wilson 'Skin Care' [8.125”]",
      description: `■ Josh Wilson Pro Model
      ■ 8.125" x 31.75" WB 14.125"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/WILSONSKINCARE_1024x1024.jpg?v=1649356177",
      price: 3519,
      featured: 0,
      slug: "wilson-skin-care",
      categoryId: 4,
    },
    {
      name: "Rizzo 'Cereal' [8.125]",
      description: `■ Dick Rizzo Pro Model
      ■ 8.125" x 31.75" WB 14.125"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/DRCEREAL_933d804a-6d39-45c1-a2dc-3fdf33735066_1024x1024.jpg?v=1647969124",
      price: 3519,
      featured: 0,
      slug: "rizzo-cereal",
      categoryId: 4,
    },
    {
      name: "Fast Car II [8]",
      description: `■ 8" x 32.375" WB 14.25"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/FASTCARII1_1f37e8cd-6e56-4863-9516-2d34b8a83b79_1024x1024.jpg?v=1647969366",
      price: 3519,
      featured: 0,
      slug: "fast-car",
      categoryId: 4,
    },
    {
      name: "Bledsoe 'Dreamcatcher' [8.125]",
      description: `■ Tyler Bledsoe Pro Model
      ■ 8.125" x 31.75" WB 14.125"
      ■ Manufactured at PS Stix
      ■ Full Dip Painted Deck
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/TBDREAMCATCHER_9a65b07c-7576-4c75-9af1-df84ec86b295_1024x1024.jpg?v=1647970184",
      price: 3519,
      featured: 0,
      slug: "bledsoe-dreamcatcher",
      categoryId: 4,
    },
    {
      name: "Acid-Ply Spectrum [8.625]",
      description: `■ 8.625" x 33" WB 14.75"
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/SPEC8.625_1024x1024.jpg?v=1675889392",
      price: 3519,
      featured: 0,
      slug: "acid-ply-spectrum",
      categoryId: 4,
    },
    {
      name: "Wallpaper A [8”]",
      description: `■ 8" x 32.375" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/WALLPAPERA_1024x1024.jpg?v=1649356307",
      price: 3519,
      featured: 0,
      slug: "wallpaper",
      categoryId: 4,
    },
    {
      name: "Wallpaper B [8.625”]",
      description: `■ 8" x 32.375" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Artwork by Kevin Fitz-Henry
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/WALLPAPERB_1024x1024.jpg?v=1649356302",
      price: 3519,
      featured: 0,
      slug: "wallpaper",
      categoryId: 4,
    },
    {
      name: "World Wide [9”]",
      description: `■ 9" x 32" WB 13.75"
      ■ Veneer Colors Are Randomly Assorted
      ■ Roll the Dice
      ■ Manufactured at PS Stix
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/WORLDWIDEEGG_1024x1024.jpg?v=1649356320",
      price: 3519,
      featured: 0,
      slug: "world-wide",
      categoryId: 4,
    },
    {
      name: "Proto [8.5]",
      description: `■ 8.5" x 32.125" WB 14.25"
      ■ Manufactured at PS Stix
      ■ Roll the Dice
      ■ Assorted Paint Fade Bottom
      Griptape
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/PROTO8.5-3_1024x1024.jpg?v=1695240181",
      price: 3519,
      featured: 0,
      slug: "proto",
      categoryId: 4,
    },
    {
      name: "Quasi x Vans Hocus Pocus [Black]",
      description: `■ Quasi x Vans Collection
      ■ Custom Checkerboard Locker Loop
      ■ Reinforced Shoulder Seams
      ■ 100% Supima Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/0001_HOCUSPOCUS_1024x1024.jpg?v=1680798134",
      price: 2519,
      featured: 0,
      slug: "quasi-vans",
      categoryId: 2,
    },
    {
      name: "Enso Jacket [Limestone]",
      description: `■ Midweight Nylon/Cotton Shell
      ■ Mesh Lined
      ■ Full Zip Front
      ■ Double Chest Pockets
      ■ Two-Way Drawstring Hood
      ■ Elastic Sleeve Openings
      ■ Raglan Sleeves
      ■ D-Ring Nylon Hang Tab
      ■ Contrast Stitch
      ■ Direct Embroidery
      ■ 72% Nylon, 28% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/ENSOJACKET_1024x1024.jpg?v=1695241492",
      price: 2519,
      featured: 0,
      slug: "enso-jacket",
      categoryId: 2,
    },
    {
      name: "Maar Long Sleeve Button Up Shirt [Gravel]",
      description: `■ Heavyweight Woven Shirting
      ■ Oversized Patch Chest Pockets
      ■ French Placket
      ■ Direct Embroidery
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/MAARGRAVEL_1024x1024.jpg?v=1695242133",
      price: 2519,
      featured: 0,
      slug: "maar-long-sleeve",
      categoryId: 2,
    },
    {
      name: "Phacerec Hoodie [Spruce]",
      description: `■ Midweight 11oz Jersey Fleece
      ■ Athletic Fit
      ■ Flat Woven Hood Drawstrings
      ■ Screen Printed Chest
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/PHACERECHOOD_104dabaf-6ff4-4358-a29c-0bc066903504_1024x1024.jpg?v=1695240593",
      price: 2519,
      featured: 0,
      slug: "phacerec-hoodie",
      categoryId: 2,
    },
    {
      name: "Outline Hoodie [Dark Brown]",
      description: `■ Midweight 11oz Jersey Fleece
      ■ Athletic Fit
      ■ Flat Woven Hood Drawstrings
      ■ Flocked Chest
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/OUTLINEHOOD_1024x1024.jpg?v=1695240550",
      price: 2519,
      featured: 0,
      slug: "outline-hoodie",
      categoryId: 2,
    },
    {
      name: "Synth Hoodie [Black]",
      description: `■ Midweight 11oz Jersey Fleece
      ■ Athletic Fit
      ■ Flat Woven Hood Drawstrings
      ■ Flocked Chest
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SYTHHOOD_1024x1024.jpg?v=1695240637",
      price: 2519,
      featured: 0,
      slug: "synth-hoodie",
      categoryId: 2,
    },
    {
      name: "Protothane [Black]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/CHEM2_1024x1024.jpg?v=1697559843",
      price: 1800,
      featured: 0,
      slug: "protothane",
      categoryId: 2,
    },
    {
      name: "Balloon [Black]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BALLOONBLACK_1024x1024.jpg?v=1695659736",
      price: 1800,
      featured: 0,
      slug: "ballon-black",
      categoryId: 2,
    },
    {
      name: "Balloon [White]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/BALLOONWHITE_1024x1024.jpg?v=1695659716",
      price: 1800,
      featured: 0,
      slug: "ballon-white",
      categoryId: 2,
    },
    {
      name: "Life 3.0 [Black]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/LIFE3.0BLACK_1024x1024.jpg?v=1695659561",
      price: 1800,
      featured: 0,
      slug: "life-black",
      categoryId: 2,
    },
    {
      name: "Stasis [Black]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/STASISBLACK_1024x1024.jpg?v=1695659515",
      price: 1800,
      featured: 0,
      slug: "stasis-black",
      categoryId: 2,
    },
    {
      name: "Stonehead [Black]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/STONEHEADBLACK_1024x1024.jpg?v=1695659478",
      price: 1800,
      featured: 0,
      slug: "stonehead-black",
      categoryId: 2,
    },
    {
      name: "Homevideo [White]",
      description: `■ Midweight Short Sleeve Tee
      ■ 100% Cotton      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/VIDEOWHITE_1024x1024.jpg?v=1684252891",
      price: 1800,
      featured: 0,
      slug: "homevideo-white",
      categoryId: 2,
    },
    {
      name: "Artifact [Acid Black]",
      description: `■ Midweight 6.5oz Cotton Jersey
      ■ Garment Dyed
      ■ Mineral Washed
      ■ High Raise Puff Print
      ■ 100% Cotton
      ■ Made in USA
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/ARTIFACTBLACK_1024x1024.jpg?v=1684252713",
      price: 2300,
      featured: 0,
      slug: "artifact-acid-black",
      categoryId: 2,
    },
    {
      name: "102 Jean [Dark Indigo]",
      description: `■ Heavyweight 16oz Denim
      ■ Regular Fit, Straight Leg
      ■ 5-Pocket
      ■ Contrast stitch
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/102BLUEFRONT_e0c0c4ae-529b-4632-9fbd-dd45741dae7c_1024x1024.jpg?v=1695407901",
      price: 5300,
      featured: 0,
      slug: "jean-dark-indigo",
      categoryId: 3,
    },

    {
      name: "Warren Trouser Pant [Dune]",
      description: `■ Heavyweight 14oz Bio Washed Denim
      ■ Baggy Fit, Tapered Leg
      ■ Pleated Front
      ■ Damask Woven Label
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/WARRENDUNEFRONT_1024x1024.jpg?v=1684253026",
      price: 5300,
      featured: 0,
      slug: "warren-trouser-pant",
      categoryId: 3,
    },

    {
      name: "Work Pant [Pin Grey]",
      description: `■ Heavyweight 8-Wale Corduroy
      ■ Regular Fit, Straight Leg
      ■ Double Knee
      ■ Embroidered Hidden Knife Pocket
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/WORKPANTPINFRONT_1024x1024.jpg?v=1684253048",
      price: 5300,
      featured: 0,
      slug: "work-pant",
      categoryId: 3,
    },

    {
      name: "Work Pant [Wine]",
      description: `■ Heavyweight 8-Wale Corduroy
      ■ Regular Fit, Straight Leg
      ■ Double Knee
      ■ Embroidered Hidden Knife Pocket
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/WORKPANTWINEFRONT_1024x1024.jpg?v=1684253064",
      price: 5300,
      featured: 0,
      slug: "work-pant-wine",
      categoryId: 3,
    },

    {
      name: "Match Short [Blue]",
      description: `■ Lightweight Taslan
      ■ Regular Fit
      ■ Elastic Waistband
      ■ Flat Woven Drawstring
      ■ 3D PVC Label
      ■ 100% Nylon
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/MATCHBLUE_1024x1024.jpg?v=1676923808",
      price: 3300,
      featured: 0,
      slug: "match-sport-blue",
      categoryId: 3,
    },

    {
      name: "Canyon Short [Tobacco]",
      description: `■ Midweight Bio Wash Twill
      ■ Regular Fit
      ■ Carpenter Pockets & Hammer Loop
      ■ Contrast Stitch
      ■ Direct Embroidery
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/SOLOGRAYFRONT_1024x1024.jpg?v=1658433528",
      price: 5300,
      featured: 0,
      slug: "canyon-short-tobacco",
      categoryId: 3,
    },

    {
      name: "Quasi x Vans Window Short [Black]",
      description: `■ Quasi x Vans Collection
      ■ Allover Blocked Artwork
      ■ Elastic Waist with Drawcord
      ■ Logo Embroidery at Left Thigh
      ■ Back Patch Pocket
      ■ 100% Polyester
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/0003_SHORTBACK_1024x1024.jpg?v=1680798217",
      price: 6300,
      featured: 0,
      slug: "quasi-window-short",
      categoryId: 3,
    },

    {
      name: "Canyon Short [Tobacco]",
      description: `■ Midweight Bio Wash Twill
      ■ Regular Fit
      ■ Carpenter Pockets & Hammer Loop
      ■ Contrast Stitch
      ■ Direct Embroidery
      ■ 100% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/CANYONSHORTFRONT_1024x1024.jpg?v=1676923872",
      price: 5300,
      featured: 0,
      slug: "canyon-short-tobacco",
      categoryId: 3,
    },
    {
      name: "Rematch Short [Wheat]",
      description: `■ Lightweight Linen
      ■ Regular Fit
      ■ Elastic Waistband
      ■ Flat Woven Drawstring
      ■ Chainstitch Leg
      ■ 55% Linen, 45% Rayon
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/REMATCHWHEATFRONT_1024x1024.jpg?v=1658433492",
      price: 1300,
      featured: 0,
      slug: "rematch-short",
      categoryId: 3,
    },

    {
      name: "Simulation Poster",
      description: `■ 27" x 40" Oversized Movie Poster
      ■ Heavyweight Stock
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SU22DECKMASTER_0000s_0017_SIMPOSTER_1024x1024.jpg?v=1689105983",
      price: 840,
      featured: 0,
      slug: "simulation-poster",
      categoryId: 5,
    },

    {
      name: "Hard Dream Blanket [Black & White]",
      description: `■ Jacquard Knit Blanket
      ■ Fringed Edges
      ■ 80% Polyester, 20% Cotton
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/HARDDREAMBLANKET_1024x1024.jpg?v=1695657098",
      price: 1200,
      featured: 0,
      slug: "hard-dream-blanket",
      categoryId: 5,
    },

    {
      name: "Sticker Pack",
      description: `■ Set of 8 Assorted Stickers
      ■ Actual colors may vary
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/2023ASSORTEDPACK_1024x1024.jpg?v=1695657119",
      price: 400,
      featured: 0,
      slug: "sticker-pack",
      categoryId: 5,
    },

    {
      name: "Quasi x Vans Rider Keychains [Multi]",
      description: `■ Set of 3
      ■ Includes 1 of each: Gilbert Crockett, Justin Henry, Dick Rizzo
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/VansQuasiWebphotos-748_0000_Layer3_1024x1024.jpg?v=1681933784",
      price: 1340,
      featured: 0,
      slug: "rider-keychains",
      categoryId: 5,
    },

    {
      name: "Smile Poster",
      description: `■ Printed Front & Back
      ■ 22.75” x 30”      
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/files/SU23POSTER_1024x1024.jpg?v=1684253163",
      price: 130,
      featured: 0,
      slug: "smile-poster",
      categoryId: 5,
    },

    {
      name: "Happiness Sticker Two Pack",
      description: `■ Set of 2 Happiness Stickers
      `,
      photo:
        "https://quasiskateboards.com/cdn/shop/products/HAPPINESSDECAL_90516617-0792-4814-91b3-8d91c4c5844a_1024x1024.jpg?v=1647969545",
      price: 110,
      featured: 0,
      slug: "happiness-sticker-pack",
      categoryId: 5,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
