const db = require("../models");
const Category = db.category;
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new categories
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a categories
  const categories = {
    name: req.body.name,
    description: req.body.description
  };

  // Save categories in the database
  Category.create(categories)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Retrieve all Categories from the database.
exports.findAll = (req, res) => {

  Category.findAll({ include: [{ model: Product } ] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};

// Find a single categories with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id,{ include: [{ model: Product } ] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categories with id=" + id
      });
    });
};
