let router = require("express").Router();
const ProductController = require("../controllers/product.controller");

//private
router.get("/", ProductController.getAll);
router.post("/", ProductController.create);
router.get("/:id", ProductController.getById);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.getById);
router.get("/remaining-quantity/:id", ProductController.getRemainingQuantity);

module.exports = router;
