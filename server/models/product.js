const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: { type: Number, required: true, unique: true },
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true, min: 0 },
  product_category: {
    type: String,
    lowercase: true,
    required: true,
  },
  product_description: { type: String },
  product_brand: { type: String, required: true },
  product_condition: { type: String, required: true },
  product_seller: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  seller_contactInfo: {
    type: Number,
  },
  product_image_url: {
    type: String,
  },
  product_image: {
    data: Buffer,
    contentType: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
