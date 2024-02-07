const { Product , Category} = require("../models");

async function index(req, res) {
    try {
      const categories = await Category.findAll();
  
      if (categories.length === 0) {
        return res.status(404).json({ message: 'No se encontraron categorias.' });
      }
  
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error al obtener categorias:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  
async function category(req, res) {
    try {
        const categoryName = req.params.categoryName;

        
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
    category,
    index,
  };