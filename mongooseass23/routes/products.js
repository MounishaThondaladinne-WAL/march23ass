const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");
router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.put("/:_id", productsController.editProduct);
router.delete("/:_id", productsController.deleteProductWithId);
router.get("/:_id", productsController.getProductWithId);
router.get("/productsearch/:name", productsController.getProductWithName);
router.get(
  "/productsearch/availability/:availability",
  productsController.getProductWithAvailability
);
router.get(
  "/productsearch/price/:price",
  productsController.getProductWithPrice
);

module.exports = router;
