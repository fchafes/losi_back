const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", productController.index);
router.get("/featured", productController.featured);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
