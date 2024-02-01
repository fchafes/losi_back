const { Product, Admin } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Display a listing of the resource.
async function index(req, res) {}


// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function login(req, res) {
  try {
    const adminEmail = req.body.email;

    const adminPassword = req.body.password;

    const admin = await Admin.findOne({ where: { email: adminEmail } });
    if (!admin) {
      return res.status(404).json("Admin not found");
    }

    const validatePassword = await bcrypt.compare(adminPassword, admin.password);
    if (!validatePassword) {
      return res.status(401).json("Invalid password");
    }
    // Habiendo validado todos los datos, nos vamos a dedicar a elaborar un token...
    const token = jwt.sign({ id: admin.id }, "stringsecreto");

    console.log("Token creado:", token);

    return res.json({ token, id: admin.id, firstname:admin.firstname });
  } catch (error) {
    console.error("Error al procesar la solicitud de inicio de sesión:", error);
    return res.status(500).json("Internal Server Error");
  }
}

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
