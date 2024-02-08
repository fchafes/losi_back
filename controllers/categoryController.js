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
async function store(req, res) {
    try {
      const name = req.body.name;
  
      // Log the received content
      console.log("Received name:", name);
  
      // si lo envian vacio
      if (!name) {
        return res.status(400).json({ error: "Article name is required" });
      }
      // Lo meto en la Base de Datos
      const newCategory = await Category.create({ name });
      
      console.log("se ha creado una nueva categoría");
      
      // Respond with the created category in JSON format
      res.json({ success: true, message: "Category created successfully", category: newCategory });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

async function update(req, res) {
    try {
        // Extrae el ID de la categoría a actualizar desde los parámetros de la URL
        const categoryId = req.params.id;
        
        // Busca la categoría en la base de datos
        const category = await Category.findByPk(categoryId);

        // Si la categoría no existe, devuelve un error 404
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Actualiza los campos de la categoría con los datos recibidos en el cuerpo de la solicitud
        category.name = req.body.name;

        // Guarda los cambios en la base de datos
        await category.save();

        // Devuelve la categoría actualizada en la respuesta
        res.json({ success: true, message: 'Category updated successfully', category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function destroy(req, res) {
    const categoryId = req.params.id;
    try {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ error: "Categoría no encontrada" });
      }
      // const authorId = article.authorId;
  
      await category.destroy();
      console.log("Se ha eliminado la categoría con éxito.");
      // await Author.update({ lastArticleId: null }, { where: { id: authorId } });
  
      res.json({ message: "Categoría eliminado con exito." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el artículo" });
    }
  }


  module.exports = {
    category,
    index,
    store,
    update,
    destroy,
  };