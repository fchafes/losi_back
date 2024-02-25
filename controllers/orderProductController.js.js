const {OrderProduct} = require("../models")

async function store(req, res) {
    const { orderId, productId, quantity } = req.body;

    try {
      // Create the order product
      const orderProduct = await OrderProduct.create({
        orderId,
        productId,
        quantity,
      });
  
      res.status(201).json(orderProduct);
      console.log("Orden realizada");
    } catch (error) {
      console.error('Error creating order product:', error);
      res.status(500).json({ message: 'Failed to create order product' });
    }
}

module.exports = {
store
};