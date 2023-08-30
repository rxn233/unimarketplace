const express = require("express");
const app = express();
const Product = require("../models/product");

const productsDisplay = async (req, res) => {
  try {
    const request = req.query;
    let queryCondition;
    let priceCondition;
    let sortCondition = {};
    if (request.new === "true" && request.used !== "true") {
      queryCondition = "New";
    } else if (request.used === "true" && request.new !== "true") {
      queryCondition = "Used";
    }
    if (parseInt(request.sort) === 1) {
      priceCondition = 1;
      sortCondition = { product_price: 1 };
    } else if (parseInt(request.sort) === 2) {
      priceCondition = -1;
      sortCondition = { product_price: -1 };
    } else {
      sortCondition = {};
    }
    if (request.text) {
      let filteredProducts;
      try {
        if (queryCondition) {
          filteredProducts = await Product.find({
            product_name: {
              $regex: request.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
              $options: "i",
            },
            product_condition: queryCondition,
          }).sort(sortCondition);
        } else {
          filteredProducts = await Product.find({
            product_name: {
              $regex: request.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
              $options: "i",
            },
          }).sort(sortCondition);
        }
      } catch (err) {
        console.log(err);
      }
      res.json(filteredProducts);
    } else {
      if (queryCondition) {
        const allProducts = await Product.find({
          product_condition: queryCondition,
        }).sort(sortCondition);
        res.json(allProducts);
      } else {
        const allProducts = await Product.find({}).sort(sortCondition);
        res.json(allProducts);
      }
    }
  } catch (err) {
    console.log("Error", err);
  }
  // const request = req.query;
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
