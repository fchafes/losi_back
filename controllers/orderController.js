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

async function store(req,res) {
  try {
    const { customerId, payment_method, shipping_address, cartItems } = req.body;

    // Create the order
    const order = await Order.create({
      state: 'confirmed',
      customerId,
      payment_method: payment_method,
      shipping_address: shipping_address,
    });

    // Create order products for each item in the cart
    await Promise.all(
      cartItems.map(async (item) => {
        await OrderProduct.create({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          selectedSize: item.selectedSize
        });
      })
    );

    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
}

module.exports = {
  index,
  show,
  store
  // Otros métodos exportados...
};
