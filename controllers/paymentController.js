require("dotenv").config();

const {
  Order,
  OrderProduct,
  Product,
  Customer,
  Stock,
  Size,
} = require("../models");
const nodemailer = require("nodemailer");

const { MercadoPagoConfig, Preference } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

// Store a newly created resource in storage.
async function store(req, res) {
  const shipping_address = req.body.shipping_address;
  const payment_method = req.body.payment_method;
  const customerId = req.body.customerId;
  const cartItems = req.body.items;

  try {
    const preferenceData = {
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
      })),
      back_urls: {
        success: `http://localhost:5173/feedback?customerId=${customerId}`,
        failure: `http://localhost:5173/feedback?customerId=${customerId}`,
        pending: `http://localhost:5173/feedback?customerId=${customerId}`,
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const response = await preference.create({ body: preferenceData });

    const { items, total } = response;

    items.forEach((item) => {
      console.log(item.title);
    });

    const getSizeIdForSelectedSize = async (selectedSize) => {
      try {  
        // Find the size with the matching label
        const size = await Size.findOne({ where: { sizes: selectedSize } });

        // If a size with the selected label is found, return its sizeId
        if (size) {
          return size.id;
        }

        // If no size is found, return null or handle the case as needed
        return null;
      } catch (error) {
        console.error("Error finding size:", error);
        // Handle the error as needed
        return null;
      }
    };

    // Create the order
    const order = await Order.create({
      order_state: "confirmed",
      customerId,
      payment_method: payment_method,
      shipping_address: shipping_address,
    });

    // Prepare email content
    let itemsList = "";
    await Promise.all(
      response.items.map(async (item) => {
        console.log("this is response", item.id);
        const product = await Product.findByPk(item.id);
        if (product) {
          cartItems.map(async (cartitem) => {
            const sizeId = await getSizeIdForSelectedSize(cartitem.selectedSize);
            if (sizeId) {
              // Check if the OrderProduct already exists
              const existingOrderProduct = await OrderProduct.findOne({
                where: {
                  orderId: order.id,
                  productId: cartitem.id,
                  selectedSize: cartitem.selectedSize,
                },
              });
    
              if (!existingOrderProduct) {
                await OrderProduct.create({
                  orderId: order.id,
                  productId: cartitem.id,
                  quantity: cartitem.quantity,
                  selectedSize: cartitem.selectedSize,
                });
                itemsList += `Quantity:${cartitem.quantity} Product: ${product.name} ${product.photo} Size: ${item.selectedSize}\n`;
    
                const stock = await Stock.findOne({
                  where: {
                    productId: cartitem.id,
                    sizeId: sizeId,
                  },
                });
                if (stock) {
                  stock.stock -= cartitem.quantity;
                  await stock.save();
                }
              }
            }
          });
        }
      })
    );
    
    

    console.log("Total:", total);
    // console.log(response);
    res.json(response);
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  store,
};
