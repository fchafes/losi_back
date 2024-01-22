const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).send("Product not found");
      return;
    }

    const productDetails = {
      id: product.id,
      name:product.name,
      description: product.description,
      photo: product.photo,
      price: product.price,

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
  show,
  store,
  update,
  destroy,
};
