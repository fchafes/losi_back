const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", categoryController.index);
// router.get("/featured", categoryController.featured);
router.post("/", categoryController.store);
router.get("/:categoryName", categoryController.category);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;