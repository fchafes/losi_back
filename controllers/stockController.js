const { Product, Stock, Size } = require("../models");


// Display a listing of the resource.
async function index(req, res) {
  try {
    const stock = await Stock.findAll();

    if (stock.length === 0) {
      return res.status(404).json({ message: "No hay lista de stock." });
    }

    res.status(200).json(stock);
  } catch (error) {
    console.error("Error al obtener stock:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function showSizes(req, res) {
  const productId = req.params.productId;
  try {
    const stock = await Stock.findAll({
      where: { productId }
    });
    if (!stock) {
      res.status(404).json({ error: 'No se encontró stock para los parámetros proporcionados' });
      return;
    }
    
    res.status(200).json(stock);
    } catch (error) {
    console.error('Error al buscar el stock:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Display the specified resource.
async function showOneSize(req, res) {
  const productId = req.params.productId;
  const sizeId = req.params.sizeId;
  try {
    const stock = await Stock.findOne({
      where: { productId, sizeId }
    });
    if (!stock) {
      res.status(404).json({ error: 'No se encontró stock para los parámetros proporcionados' });
      return;
    }
    res.status(200).json(stock);
    } catch (error) {
    console.error('Error al buscar el stock:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {  
}




// Update the specified resource in storage.
async function update(req, res) {
  const sizeId = req.params.sizeId;
  const productId = req.params.productId;
  const addStock = req.body.stockValue;
  console.log(addStock);
  console.log("addStock del back, parseado", parseInt(addStock));
  try {
    const stock = await Stock.findOne({
      where: { productId, sizeId }
    });
    if (!stock) {
      res.status(404).json({ error: 'No se encontró stock para los parámetros proporcionados' });
      return;
    }
    stock.stock += parseInt(addStock);
    await stock.save();
    res.status(200).json({ message: `Stock actualizado a: ${stock.stock}.` });
    } catch (error) {
    console.error('Error al buscar el stock:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function login(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  showSizes,
  showOneSize,
  store,
  update,
  destroy,
  login,
};
