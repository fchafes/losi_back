const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Rutas relacionadas con las órdenes
router.get("/", orderController.index);
router.get("/:customerid",orderController.getLastOrder)
router.post("/", orderController.store);
// Agrega otras rutas según tus necesidades...

module.exports = router;
