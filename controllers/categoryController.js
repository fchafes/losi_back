const { Product , Category} = require("../models");


async function category(req, res) {
    try {
        const categoryName = req.params.categoryName;

        // Fetch products with the specified categoryName and include the associated Category
        const products = await Product.findAll({
            include: {
                model: Category,
                where: { name: categoryName },
            },
        });

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("An error occurred.");
    }
}

  module.exports = {
    category
  };