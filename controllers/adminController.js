const { Product } = require("../models");


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

// Display the specified resource.
async function show(req, res) {}

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
