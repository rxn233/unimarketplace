import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../ProductSection/ProductList";
import { useNavigate } from "react-router";

function Sell() {
  const userId = localStorage.getItem("user_id");
  const [products, setProducts] = useState([]);

  // function submitHandler(event) {
  //   event.preventDefault();
  // }
  const navigate = useNavigate();
  function clickHandler(event) {
    navigate("/createlisting");
  }

  function backHandler() {
    navigate("/sell");
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/myproducts", {
        params: {
          user_id: userId,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  }, [userId]);

  return (
    <div>
      <h2>My Products</h2>
      <button onClick={clickHandler}>Add New Listing</button>
      <div>
        {products.map((i) => (
          <ProductList
            key={i.product_id + 1}
            product_id={i.product_id}
            product_name={i.product_name}
            product_image_url={i.product_image_url}
            product_price={i.product_price}
            product_description={i.product_description}
          />
        ))}
      </div>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
}

export default Sell;
