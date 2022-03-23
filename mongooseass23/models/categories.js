const mongoose = require("mongoose");
var CategoriesSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },
});
module.exports = mongoose.model("Category", CategoriesSchema);
