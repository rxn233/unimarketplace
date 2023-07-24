const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const Product = require("./models/product");
const User = require("./models/users");
const loginRoute = require("./routes/login");
const displayRoute = require("./routes/productDisplay");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());

const dummyProducts = [{ id: 1, name: "Hello", price: 10 }];

mongoose
  .connect("mongodb://localhost:27017/uniMarketPlace")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.get("/home", displayRoute.productsDisplay);

app.post("/login", loginRoute.loginUser);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
