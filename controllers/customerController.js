const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Customer } = require("../models");
// Display a listing of the resource.
async function index(req, res) {
  try {
    const customers = await Customer.findAll();

    if (customers.length === 0) {
      return res.status(404).json({ message: 'No se encontraron clientes.' });
    }

    res.status(200).json(customers);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Display the specified resource.
async function show(req, res) {}


async function store(req, res) {
  const { firstname, lastname, email, address, phone, password } = req.body;

  try {
    // Check if the email is already registered
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer record
    const newCustomer = await Customer.create({
      firstname,
      lastname,
      email,
      address,
      phone,
      password: hashedPassword,
    });

    // Generate a JWT token
    const token = jwt.sign({ customerId: newCustomer.id }, 'stringsecreto', { expiresIn: '1h' });

    // Construct the response with token and customer info
    const responseData = {
      token,
      customer: {
        id: newCustomer.id,
        firstname: newCustomer.firstname,
        lastname: newCustomer.lastname,
        email: newCustomer.email,
        address: newCustomer.address,
        phone: newCustomer.phone,
      },
    };

    // Send the response back to the client
    res.status(201).json(responseData);
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function login(req, res) {
  const customerEmail = req.body.email;
  const customerPassword = req.body.password;

  try {
    // Check if the customer exists
    const existingCustomer = await Customer.findOne({ where: { email: customerEmail } });
    if (!existingCustomer) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(customerPassword, existingCustomer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ customerId: existingCustomer.id }, 'stringsecreto', { expiresIn: '1h' });

    console.log("Token creado:", token);

    // Construct the response with token and customer info
    const responseData = {
      token,
      customer: {
        id: existingCustomer.id,
        firstname: existingCustomer.firstname,
        lastname: existingCustomer.lastname,
        email: existingCustomer.email,
        address: existingCustomer.address,
        phone: existingCustomer.phone,
      },
    };

    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error occurred during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Update the specified resource in storage.
// Update the specified resource in storage.
async function update(req, res) {
  const { id } = req.params; // Assuming you pass the customer ID in the URL params
  const { firstname, lastname, email, address, phone } = req.body;

  try {
    // Find the customer by ID
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update customer information
    customer.firstname = firstname ;
    customer.lastname = lastname ;
    customer.email = email ;
    customer.address = address ;
    customer.phone = phone ;

    // Save changes to the database
    await customer.save();

    // Construct and send response
    res.status(200).json({ message: 'Customer updated successfully', customer });
  } catch (error) {
    console.error('Error occurred during update:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  login,
};
