require("dotenv").config();

const {
  Order,
  OrderProduct,
  Product,
  Customer,
  Stock,
  Size,
} = require("../models");


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
        success: `http://localhost:5173/feedback`,
        failure: `http://localhost:5173/error`,
        pending: `http://localhost:5173/feedback`,
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const response = await preference.create({ body: preferenceData });

    res.json(response);
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  store,
};
