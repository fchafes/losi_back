const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

// Rutas relacionadas con las órdenes
router.get("/", stockController.index);
router.get("/:productId", stockController.showSizes);
router.get("/:productId/:sizeId", stockController.showOneSize);
router.patch("/:productId/:sizeId", stockController.update);
router.post("/:productId",stockController.store);
module.exports = router;
