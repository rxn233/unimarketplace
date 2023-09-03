import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateListing() {
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productCondition, setProductCondition] = useState("new");
  const [productPrice, setProductPrice] = useState();
  const [productURL, setProductURL] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [productDuration, setProductDuration] = useState();
  const [productOriginalPrice, setProductOriginalPrice] = useState();
  const [productDescription, setProductDescription] = useState("");

  const navigate = useNavigate();

  function productNameHandler(event) {
    setProductName(event.target.value);
  }
  function productDescHandler(event) {
    setProductDescription(event.target.value);
  }
  function productCategoryHandler(event) {
    setProductCategory(event.target.value);
  }
  function productBrandHandler(event) {
    setProductBrand(event.target.value);
  }
  function productConditionHandler(event) {
    setProductCondition(event.target.value);
  }
  function productPriceHandler(event) {
    setProductPrice(event.target.value);
  }
  function productOriginalPriceHandler(event) {
    setProductOriginalPrice(event.target.value);
  }
  function productDurationHandler(event) {
    setProductDuration(event.target.value);
  }
  function productImageURLHandler(event) {
    setProductURL(event.target.value);
  }
  function productImageHandler(event) {}

  function backHandler() {
    navigate("/sell");
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios
        .get("http://localhost:3001/predict", {
          params: {
            productCondition: productCondition,
            productOriginalPrice: productOriginalPrice,
            productDuration: productDuration,
          },
        })
        .then(function (response) {
          console.log("Success", response.data);
          setEstimatedPrice(response.data.estimated_price);
        })
        .catch(function (error) {
          console.log("Error", error);
        });
    }, 500);
    return () => clearTimeout(timeOut);
  }, [productCondition, productOriginalPrice, productDuration]);

  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      userId,
      productName,
      productCategory,
      productBrand,
      productCondition,
      productDuration,
      productOriginalPrice,
      productPrice,
      productURL,
      estimatedPrice,
      productDescription,
    };

    console.log(productData);

    axios
      .post("http://localhost:3001/createlisting", productData)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sell</h1>
        <label htmlFor="product_name">Enter the Product Name</label>
        <input
          onChange={productNameHandler}
          type="text"
          name="product_name"
          id="product_name"
          required
        />
        <br />
        <br />
        <label htmlFor="product_category">Enter the Product Category</label>
        <input
          onChange={productCategoryHandler}
          type="text"
          name="product_category"
          id="product_category"
          required
        />
        <br />
        <br />
        <label htmlFor="product_description">
          Enter the Product Description
        </label>
        <input
          onChange={productDescHandler}
          type="text"
          name="product_description"
          id="product_description"
        />
        <br />
        <br />
        <label htmlFor="product_brand">Enter the Product Brand</label>
        <input
          onChange={productBrandHandler}
          type="text"
          name="product_brand"
          id="product_brand"
          required
        />
        <br />
        <br />
        <label htmlFor="product_condition">Select the product condition</label>
        <select
          name="product_condition"
          onChange={productConditionHandler}
          value={productCondition}
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <br />
        <br />
        <label htmlFor="product_duration">
          How Long have you used the product for?
        </label>
        <input
          onChange={productDurationHandler}
          type="number"
          id="product_duration"
        />
        <br />
        <br />
        <label htmlFor="original_product_price">
          Enter the Original Product Price
        </label>
        <input
          value={productOriginalPrice}
          onChange={productOriginalPriceHandler}
          type="number"
          id="original_product_price"
        />
        <br /> <br />
        <label htmlFor="product_price">Enter the product price</label>
        <input
          onChange={productPriceHandler}
          type="number"
          id="product_price"
        />
        <label htmlFor="product_image">Add the Image</label>
        <input
          onChange={productImageHandler}
          type="file"
          name="product_image"
          id="product_image"
        />
        <br />
        <br />
        <label htmlFor="product_image_url">Add the Image URL</label>
        <input
          onChange={productImageURLHandler}
          type="text"
          name="product_image_url"
          id="product_image_url"
        />
        <br />
        <br />
        <label htmlFor="estimated_price">Estimated Product Price </label>
        {parseFloat(estimatedPrice).toFixed(2)}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
}

export default CreateListing;
