const Book = require("../models/book");
exports.createBook = (request, response) => {
  const { name, description, author, category } = request.body;
  let bookOb = new Book({ name, description, author, category });
  bookOb.save((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { msg: "book created" } });
    }
  });
};
exports.getBooks = (request, response) => {
  Book.find((err, books_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { books_list } });
    }
  });
};
exports.getBooksWithAuthor = (request, response) => {
  Book.find()
    .populate("author")
    .exec((err, books_list) => {
      if (err) {
        response.json(err);
      } else {
        response.json({ status: 1, data: { books_list } });
      }
    });
};
exports.getBookWithCondition = (request, response) => {
  Book.find({ name: request.params.name }).exec((err, books_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { books_list } });
    }
  });
};
exports.getBookWithAuthorAndCategory = (req, res) => {
  Book.find()
    .populate("author")
    .populate("category")
    .exec((err, books_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 1, data: { books_list } });
      }
    });
};
exports.getBookwithId = (req, res) => {
  Book.findById(req.params._id).exec((err, bookwithid) => {
    if (err) {
      res.json(err);
    } else {
      res.json(bookwithid);
    }
  });
};
