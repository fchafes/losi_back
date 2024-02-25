require("dotenv").config();

const {MercadoPagoConfig,Preference} = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN });

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const preferenceData = {
      items: [
        {
            title: req.body.name,
            unit_price: req.body.price,
            quantity: req.body.quantity,
            currency_id: "UYU",
        }
      
      ],
      back_urls: {
        success: "http://localhost:5173/",
        failure: "http://localhost:5173/feedback",
        pending: "http://localhost:5173/feedback"
      },
      auto_return: "approved"
    };
  
    const preference= new Preference(client);
    const response = await preference.create({body:preferenceData});
    res.json(response);
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  store
};
