const express = require("express");
const app = express();
const Product = require("../models/product");
const User = require("../models/users");

const userProductsDisplay = async (req, res) => {
  try {
    const user = req.query;
    console.log("User products display", user.user_id);
    try {
      userProducts = await Product.find({ "product_seller.id": user.user_id });
      res.json(userProducts);
    } catch (err) {
      res.json({ flag: "n", error: "User products search error" });
    }
  } catch (error) {
    res.json({ flag: "n", error: error });
  }
};

const getDBUserData = async (user_id) => {
  try {
  } catch (error) {}
};

const createUserProduct = async (req, res) => {
  //req.body format - {userId, productName, productCategory,
  // productBrand, productCondition, productPrice, productURL}
  try {
    const productData = req.body;
    console.log(productData);

    res.json({ flag: "y" });
  } catch (error) {
    res.json({ flag: "n", error: "Error in creating new product" });
  }
};

module.exports = {
  userProductsDisplay,
  createUserProduct,
};
