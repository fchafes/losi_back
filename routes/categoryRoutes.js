const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", categoryController.index);
router.get("/:categoryName", categoryController.category);

router.use(checkJwt({ secret: "stringsecreto", algorithms: ["HS256"] }));

router.post("/", categoryController.store);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;