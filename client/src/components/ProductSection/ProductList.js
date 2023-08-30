import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductList(props) {
  const navigate = useNavigate();

  const messageUser = () => {
    navigate("/message");
  };
  return (
    <div className="product-box">
      <div className="product-image">
        <img src={props.product_image_url} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{props.product_name}</h3>
        <p className="product-description">{props.product_description}</p>
        <p className="product-category">
          <b>Category:</b> {props.product_category}
        </p>
        <p className="product-condition">
          <b>Product Condition: </b>
          {props.product_condition}
        </p>
        <div className="price-container">
          <span className="price-label">Price: </span>
          <span className="product-price">
            {parseFloat(props.product_price).toFixed(2)}
          </span>
        </div>
        <div className="price-container">
          <span className="price-label">Estimated Price: </span>
          <span className="product-estimated-price">Estimated AI Price</span>
        </div>
        <button onClick={messageUser}>Message User</button>
      </div>
    </div>
  );
}

export default ProductList;
