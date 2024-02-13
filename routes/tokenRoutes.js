const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController")
const adminController = require("../controllers/adminController")
// Rutas relacionadas a los usuarios:
// ...

router.post("/", adminController.login);
router.post("/customer", customerController.login);

module.exports = router;
