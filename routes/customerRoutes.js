const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", customerController.index);
router.post("/", customerController.store);
router.get("/:id", customerController.show);
router.patch("/:id", customerController.update);
router.patch('/password-reset/:token', customerController.resetPassword);
router.post('/password-reset/request', customerController.requestPasswordReset);
router.delete("/:id", customerController.destroy);

module.exports = router;
