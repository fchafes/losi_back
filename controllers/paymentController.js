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
        console.error('Error finding size:', error);
        // Handle the error as needed
        return null;
      }
    };

    const order = await Order.create({
      order_state: "confirmed",
      customerId,
      payment_method: payment_method,
      shipping_address: shipping_address,
    });

    console.log(response.items);
    const responseItemIds = response.items.map((responseItem) => responseItem.id);
    console.log(cartItems);

    let itemsList = "";

    await Promise.all(
      cartItems.map(async (item) => {
        try {
          const product = await Product.findByPk(item.id);
          console.log("this is a ", product, "end");
          if (product.id = responseItemIds) {
            
              const sizeId = await getSizeIdForSelectedSize(item.selectedSize).catch((error) => {
                console.error('Error finding size:', error);
                throw error;
              });

              if (sizeId) {
                await OrderProduct.create({
                  orderId: order.id,
                  productId: item.id,
                  quantity: item.quantity,
                  selectedSize: item.selectedSize,
                });
                itemsList += `Quantity:${item.quantity} Product: ${product.name} ${product.photo} Size: ${item.selectedSize}\n`;

                // Update stock
                const stock = await Stock.findOne({
                  where: {
                    productId: item.id,
                    sizeId: sizeId,
                  },
                });
                if (stock) {
                  stock.stock -= item.quantity;
                  await stock.save();
                }
              }
            ;
          }
        } catch (error) {
          console.error("Error processing item:", error);
          // Handle the error as needed
        }
      })
    );

    res.json(response);
  } catch (error) {
    console.error("Error creating preference:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
  store,
};
