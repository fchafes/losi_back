const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", customerController.index);
router.get("/featured", customerController.index);
router.post("/", customerController.store);
router.get("/:id", customerController.show);
router.patch("/:id", customerController.update);
router.delete("/:id", customerController.destroy);

module.exports = router;
