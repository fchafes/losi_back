const { Product , Category} = require("../models");

async function category(req, res) {
    try {
      const categoryName = req.params.categoryName;
  
      // Find the Category by name to get its id
      const category = await Category.findOne({
        where: { name: categoryName },
      });
  
      if (!category) {
        res.status(404).send('Category not found');
        return;
      }
  
      // Fetch products with the found categoryId and include the associated Category
      const products = await Product.findAll({
        where: { categoryId: category.id },
        include: Category,
      });
  
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('An error occurred.');
    }
  }

  module.exports = {
    category
  };