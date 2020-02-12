module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new products
  router.post("/", products.create);

  // Retrieve all products
  router.get("/", products.findAll);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", products.findOne);

  app.use('/api/products', router);
};
