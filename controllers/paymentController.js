const {MercadoPagoConfig,Preference} = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-2509782001690764-022117-bedefb8cee5cd87c46026a7a9b95368b-274998896' });

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const preferenceData = {
      items: [
        {
          productId: req.body.cartItems.productId,
          quantity: Number(req.body.cartItems.quantity),
          price: Number(req.body.total),
          unit_price: Number(req.body.cartItems.unit_price),
          currency_id: "UYU",
          name: req.body.cartItems.name,
        }
      
      ],
      back_urls: {
        success: "http://localhost:5173/",
        failure: "http://localhost:5173/",
        pending: "http://localhost:5173/"
      },
      auto_return: "approved"
    };
    console.log(req.body);
    console.log("hola");
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
