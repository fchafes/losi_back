const { Product , Category, Size , Stock} = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();

    if (products.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos.' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
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

// Display the specified resource.
async function show(req, res) {
  try {
    const productId = req.params.id;

    // Include the Size model and fetch the associated sizes
    const product = await Product.findByPk(productId, {
      include: [{ model: Size, as: 'stocks' }],
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
      sizes: product.stocks.map(size => ({
        id: size.id,
        size: size.sizes
      })),
    };

    res.json(productDetails);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
}


// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  featured,
  show,
  store,
  update,
  destroy,
  category
};
