const { MercadoPago } = require('mercadopago');

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const preference = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "UYS"
        }
      ],
      back_urls: {
        success: "https://www.youtube.com/watch?v=-VD-l5BQsuE&ab_channel=onthecode",
        failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&ab_channel=onthecode",
        pending: "https://www.youtube.com/watch?v=-VD-l5BQsuE&ab_channel=onthecode"
      },
      auto_return: "approved"
    };

    const response = await MercadoPago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  store
};
