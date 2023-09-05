// import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductList.module.css";

function ProductList(props) {
  const navigate = useNavigate();

  const messageUser = () => {
    navigate("/message");
  };

  const emailUser = () => {};

  return (
    <div className={styles.productItem}>
      <img
        src={props.product_image_url}
        alt={props.product_name}
        className={styles.productImage}
      />

      <div className={styles.productDetails}>
        <div className={styles.productName}>{props.product_name}</div>
        <div className={styles.productDescription}>
          {props.product_description}
        </div>
        <div className={styles.productCategory}>
          Category: {props.product_category}
        </div>
        <div className={styles.productCondition}>
          Condition: {props.product_condition}
        </div>
        <div className={styles.productPrice}>Price: ${props.product_price}</div>

        <div className={styles.estimatedPrice}>
          Estimated Price: £{parseFloat(props.estimated_price).toFixed(2)}
        </div>

        <div className={styles.product_original_price}>
          Original Product Price: £
          {parseFloat(props.product_original_price).toFixed(2)}
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.messageButton} onClick={messageUser}>
            Message User
          </button>
          <button className={styles.contactButton} onClick={emailUser}>
            Contact User by Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
