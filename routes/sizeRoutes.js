const express = require("express");
const router = express.Router();
const sizeController = require("../controllers/sizeController");

// Rutas relacionadas con las órdenes
router.get("/", sizeController.index);

module.exports = router;
