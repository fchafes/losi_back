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

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, address, phone, password } = req.body;

  try {
    
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(req.body)
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

    // Send the token back to the client
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Update the specified resource in storage.
async function update(req, res) {}

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
};
