const Product = require("../models/products");
const getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
const createProduct = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Product Added");
    }
  });
};
const editProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params._id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(` product with id ${req.params._id} is updated successfully`);
    }
  });
};
const getProductWithId = (req, res) => {
  Product.findById(req.params._id).exec((err, productwithid) => {
    if (err) {
      res.json(err);
    } else {
      res.json(productwithid);
    }
  });
};
const deleteProductWithId = (req, res) => {
  Product.findByIdAndDelete(req.params._id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(` product with id ${req.params._id} is deleted successfully`);
    }
  });
};
const getProductWithName = (req, res) => {
  Product.find({ name: req.params.name }).exec((err, productwithname) => {
    if (err) {
      res.json(err);
    } else {
      res.json(productwithname);
    }
  });
};
const getProductWithAvailability = (req, res) => {
  Product.find({ availability: req.params.availability }).exec(
    (err, product) => {
      if (err) {
        res.json(err);
      } else {
        res.json(product);
      }
    }
  );
};
const getProductWithPrice = (req, res) => {
  Product.find({ price: { $gte: req.params.price } }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
module.exports = {
  getProducts,
  createProduct,
  editProduct,
  getProductWithId,
  deleteProductWithId,
  getProductWithName,
  getProductWithAvailability,
  getProductWithPrice,
};
