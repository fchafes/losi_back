const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController")
// Rutas relacionadas a los usuarios:
// ...

router.post("/", adminController.login);

module.exports = router;
