const User = require("../models/users");
const getUsers = (req, res) => {
  User.find((err, users_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(users_list);
    }
  });
};
const createUsers = (req, res) => {
  userObj = new User(req.body);
  userObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("added user successfully");
    }
  });
};
const editUsers = (req, res) => {
  User.findByIdAndUpdate(req.params._id, req.body, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`user with id ${req.params._id} is successfully updated`);
    }
  });
};
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params._id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(`user with id ${req.params._id} is successfully deleted`);
    }
  });
};
const getUserWithId = (req, res) => {
  User.findById(req.params._id).exec((err, userwithid) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userwithid);
    }
  });
};
const getUserWithName = (req, res) => {
  User.find({ name: req.params.name }).exec((err, userwithname) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userwithname);
    }
  });
};
const getUserWithUserName = (req, res) => {
  User.find({ username: req.params.username }).exec((err, userwithusername) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userwithusername);
    }
  });
};
const getUserWithDOB = (req, res) => {
  User.find({ dob: req.params.dob }).exec((err, userwithdob) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userwithdob);
    }
  });
};
const getUserWithPassword = (req, res) => {
  User.find({ password: req.params.password }).exec((err, userwithpassword) => {
    if (err) {
      res.json(err);
    } else {
      res.json(userwithpassword);
    }
  });
};
module.exports = {
  getUsers,
  createUsers,
  editUsers,
  getUserWithId,
  deleteUser,
  getUserWithName,
  getUserWithUserName,
  getUserWithDOB,
  getUserWithPassword,
};
