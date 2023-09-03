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

const getProductId = async () => {
  try {
  } catch (err) {}
};

const createUserProduct = async (req, res) => {
  //req.body format - {userId, productName, productCategory,
  // productBrand, productCondition, productPrice, productURL}
  try {
    const productData = req.body;
    console.log(productData);
    try {
      await Product.insertMany({
        product_id: "349",
        product_name: productData.productName,
        product_price: productData.productPrice,
        product_category: productData.productCategory,
        product_description: productData.productDescription,
        product_brand: productData.productBrand,
        product_condition: productData.productCondition,
        product_image_url: productData.productURL,
        product_estimated_price: productData.estimatedPrice,
        product_original_price: productData.productOriginalPrice,
        product_seller: {
          id: productData.userId,
        },
      })
        .then((data) => {
          console.log("Success", data);
          res.json({ flag: "y" });
        })
        .catch((err) => {
          console.log("Error", err);
          res.json({ flag: "n", error: err });
        });
    } catch (error) {
      res.json({ flag: "n", error: error });
    }
  } catch (error) {
    res.json({ flag: "n", error: "Error in creating new product" });
  }
};

module.exports = {
  userProductsDisplay,
  createUserProduct,
};
