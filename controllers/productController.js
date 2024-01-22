const { Product, Customer } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Devuelve productos destacados
async function featured(req, res) {
  try {
    const featuredProducts = await Product.findAll({
      where: {
        featured: true
      }
    });
    res.status(200).json(featuredProducts);
  } catch (error) {
    console.error('Error al obtener productos destacados:', error);
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
  featured,
  show,
  store,
  update,
  destroy,
};
