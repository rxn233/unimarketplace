import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../ProductSection/ProductList";
import { useNavigate } from "react-router";
import styles from "./Sell.module.css";

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

  console.log("Your products", products);

  return (
    <div>
      {userId === "" ? (
        <h3>Please login first to view your products..!</h3>
      ) : (
        <div className={styles["sell-container"]}>
          <h2>My Products</h2>
          <button className={styles["newlist-button"]} onClick={clickHandler}>
            Add New Listing
          </button>
          <div className={styles["myproductlist"]}>
            {products.length === 0 ? (
              <h2 className={styles["inside-h2"]}>
                You have not listed any products yet
              </h2>
            ) : (
              products.map((i) => (
                <ProductList
                  key={i.product_id + 1}
                  product_id={i.product_id}
                  product_name={i.product_name}
                  product_image_url={i.product_image_url}
                  product_price={i.product_price}
                  product_description={i.product_description}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sell;
