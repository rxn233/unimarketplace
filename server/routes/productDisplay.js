const express = require("express");
const app = express();
const Product = require("../models/product");

const productsDisplay = async (req, res) => {
  try {
    const searchText = req.query;
    console.log(searchText.text);
    if (searchText.text) {
      let filteredProducts;
      try {
        filteredProducts = await Product.find({
          product_name: {
            $regex: searchText.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            $options: "i",
          },
        });
      } catch (err) {
        console.log(err);
      }
      res.json(filteredProducts);
    } else {
      const allProducts = await Product.find({});
      res.json(allProducts);
    }
  } catch (err) {
    console.log("Error", err);
  }
  // const searchText = req.query;
  // const filteredProducts = await Product.find({
  //   product_name: { $regex: searchText.text, $options: "i" },
  // });
  // res.json(filteredProducts);

  // const allProducts = await Product.find({});
  // res.json(allProducts);
};

module.exports = {
  productsDisplay,
};
