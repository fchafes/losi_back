const express = require("express");
const router = express.Router();
const orderProductController = require("../controllers/orderProductController.js");






router.post("/", orderProductController.store);



module.exports = router;