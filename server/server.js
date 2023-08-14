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
const myProfileRoute = require("./routes/myprofile");
const signupRoute = require("./routes/signup");
const productListing = require("./routes/productListing");
const userProducts = require("./routes/userProducts");
const { socketSetup } = require("./routes/socket");
const http = require("http");
const server = http.createServer(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/uniMarketPlace")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.get("/home", displayRoute.productsDisplay);

app.get("/myprofile", myProfileRoute.profileDisplay);

app.get("/login", loginRoute.loginUser);

app.get("/signup", signupRoute.signupCheck);

app.get("/myproducts", userProducts.userProductsDisplay);

app.post("/verify", signupRoute.verifyCode);

app.post("/sell", productListing.productListing);

app.post("/createlisting", userProducts.createUserProduct);

socketSetup(server);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
