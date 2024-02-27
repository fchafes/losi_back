const { Order, OrderProduct, Product, Customer, Stock, Size } = require("../models");
const nodemailer = require("nodemailer");
// Obtener todas las órdenes
async function index(req, res) {
  try {
    const orders = await Order.findAll({
      include: [Product],
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
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
      return res.status(404).json({ message: "Orden no encontrada." });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error al obtener la orden:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function store(req, res) {
  try {
    const { customerId, payment_method, shipping_address, cartItems } =
      req.body;

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
      cartItems.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        if (product) {
          // Get the sizeId for the selectedSize label
          const sizeId = await getSizeIdForSelectedSize(item.selectedSize);

          if (sizeId) {
            await OrderProduct.create({
              orderId: order.id,
              productId: item.productId,
              quantity: item.quantity,
              selectedSize: item.selectedSize,
            });
            itemsList += `Quantity:${item.quantity} Product: ${product.name} ${product.photo} Size: ${item.selectedSize}\n`;

            // Update stock
            const stock = await Stock.findOne({
              where: {
                productId: item.productId,
                sizeId: sizeId,
              },
            });
            if (stock) {
              stock.stock -= item.quantity;
              await stock.save();
            }
          }
        }
      })
    );

    // Get the customer's email address
    const customer = await Customer.findByPk(customerId);
    const customerEmail = customer ? customer.email : "unknown";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thomih44@gmail.com",
        pass: "iwey qcps xzft ehtv",
      },
    });

    const mailOptions = {
      from: "losiskateboards@gmail.com",
      to: customerEmail,
      subject: "Order Confirmation",
      text: `Dear Customer,

Thank you for your order! We are pleased to inform you that your order has been confirmed and will be shipped to the following address:

Shipping Address:
${shipping_address}

Items Ordered:
${itemsList}

Payment Method: ${payment_method}

If you have any questions or need further assistance, please feel free to contact us.

Best regards,
Losi Skateboards`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
}




module.exports = {
  index,
  show,
  store,
 
  // Otros métodos exportados...
};
