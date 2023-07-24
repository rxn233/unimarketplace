const express = require("express");
const app = express();
const Product = require('../models/product');

const productsDisplay = async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
};

module.exports = {
    productsDisplay
}