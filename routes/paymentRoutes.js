const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Rutas relacionadas a los usuarios:
// ...

router.post("/create_preference", paymentController.store);




module.exports = router;
