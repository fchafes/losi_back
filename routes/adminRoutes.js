const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/products", adminController.index);
router.post("/", adminController.store);
router.get("/", adminController.show);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);

module.exports = router;
