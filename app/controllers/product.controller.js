const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new Products
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Products
  const Products = {
    name: req.body.name,
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    categoryId: req.body.categoryId,
  };

  // Save Products in the database
  Product.create(Products)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Products."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
 
  Product.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};

// Find a single Products with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Products with id=" + id
      });
    });
};
