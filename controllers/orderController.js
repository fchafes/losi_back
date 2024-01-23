const { Order, OrderProduct, Product, Customer } = require("../models");

// Obtener todas las órdenes
async function index(req, res) {
  try {
    const orders = await Order.findAll({
      include: [Product],
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Obtener una orden específica por ID
async function show(req, res) {
  const orderId = req.params.id;

  try {
    const order = await Order.findByPk(orderId, {
      include: [
        { model: OrderProduct, include: [Product] },
        { model: Customer },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada.' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Otros métodos para crear, actualizar y eliminar órdenes según tus necesidades...
// ...

module.exports = {
  index,
  show,
  // Otros métodos exportados...
};
