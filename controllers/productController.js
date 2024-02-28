const { Product, Category, Size, Stock } = require("../models");
const formidable = require("formidable");
const { Sequelize, Op } = require("sequelize");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();

    if (products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos." });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function search(req, res) {
  try {
    const searchTerm = req.query.search;
    const results = await Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `${searchTerm}%`,
        },
      },
    });
    res.json(results);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
// Devuelve productos destacados
async function featured(req, res) {
  try {
    const featuredProducts = await Product.findAll({
      where: {
        featured: true,
      },
    });
    res.status(200).json(featuredProducts);
  } catch (error) {
    console.error("Error al obtener productos destacados:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// Display the specified resource.
async function category(req, res) {
  try {
    const categoryName = req.params.categoryName;

    // Find the Category by name to get its id
    const category = await Category.findOne({
      where: { name: categoryName },
    });

    if (!category) {
      res.status(404).send("Category not found");
      return;
    }

    // Fetch products with the found categoryId and include the associated Category
    const products = await Product.findAll({
      where: { categoryId: category.id },
      include: Category,
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("An error occurred.");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const productId = req.params.id;

    // Include the Size model and fetch the associated sizes
    const product = await Product.findByPk(productId, {
      include: [{ model: Size, as: "stocks" }],
    });

    if (!product) {
      res.status(404).send("Product not found");
      return;
    }

    // Extract relevant details from the product object
    const productDetails = {
      id: product.id,
      name: product.name,
      description: product.description,
      photo: product.photo,
      price: product.price,
      slug: product.slug,
      sizes: product.stocks.map((size) => ({
        id: size.id,
        size: size.sizes,
      })),
    };

    res.json(productDetails);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
}



// Store a newly created resource in storage.
async function store(req, res) {
  const form = new formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
    uploadDir: __dirname + '/../public', // Set the path where you want to save the uploaded files
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    // Destructure fields from form data
    const { name, description, price, featured, categoryId } = fields;

    // Check if the name field is present and not empty
    if (!name || !name[0]) {
      return res.status(400).json({ error: 'Name field is missing or empty' });
    }

    // Create the product
    try {
      // Create the product with the provided fields
      const newProduct = await Product.create({
        name: name[0],
        description: description[0],
        price: price[0],
        photo: files.photo[0].newFilename,
        featured: featured[0] === 'true',
        categoryId: categoryId[0],
      });

      // Retrieve all sizes from the database
      const sizes = await Size.findAll();

      // Create stock records for each size with stock 0 for the new product
      await Promise.all(
        sizes.map(async (size) => {
          await Stock.create({
            productId: newProduct.id,
            sizeId: size.id,
            stock: 0,
          });
        })
      );

      // Respond with the newly created product
      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating product' });
    }
  });
}


// Update the specified resource in storage.
async function update(req, res) {
  const productId = req.params.id; // Obtener el ID del producto de los parámetros de la solicitud

  const form = new formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
    uploadDir: __dirname + "/../public", // Establecer la ruta donde quieres guardar los archivos subidos
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error parsing form data" });
    }

    const { name, description, price, featured, categoryId } = fields;

    // Si se subió una nueva foto, obtener la información de la foto
    let photo;
    if (files.photo) {
      photo = files.photo;
    }

    try {
      // Buscar el producto en la base de datos por ID
      const product = await Product.findByPk(productId);

      // Verificar si el producto existe
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Actualizar los campos del producto con los valores recibidos
      if (name) product.name = name[0];
      if (description) product.description = description[0];
      if (price) product.price = price[0];
      if (photo) product.photo = photo[0].newFilename;
      if (featured) product.featured = featured[0] === 'true';
      if (categoryId) product.categoryId = categoryId[0];
      // Guardar los cambios en el producto actualizado
      await product.save();

      // Responder con el producto actualizado en formato JSON
      res.json({ success: true, message: "Product updated successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating product" });
    }
  });
}

module.exports = { update };

// Remove the specified resource from storage.
async function destroy(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrada" });
    }
    // const authorId = article.authorId;

    await product.destroy();
    console.log("Se ha eliminado el producto con éxito.");
    // await Author.update({ lastArticleId: null }, { where: { id: authorId } });

    res.json({ message: "Producto eliminado con exito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
}


// Otros handlers...
// ...

module.exports = {
  index,
  featured,
  show,
  store,
  update,
  destroy,
  category,
  search,
};
