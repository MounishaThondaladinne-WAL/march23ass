var express = require("express");
var router = express.Router();
const categoryController = require("../controllers/categories");
router.get("/", categoryController.getCategories);
router.post("/", categoryController.createCategories);
router.delete("/:_id", categoryController.deleteCategories);
router.put("/:_id", categoryController.editCategories);
module.exports = router;
