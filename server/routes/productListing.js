const express = require("express");
const app = express();
const Product = require("../models/product");

const productListing = async (req, res) => {
  try {
    console.log("try");
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {
  productListing,
};
