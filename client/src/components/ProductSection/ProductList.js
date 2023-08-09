import "./ProductList.css";

function ProductList(props) {
  return (
    <div className="product-box">
      <div className="product-image">
        <img src={props.product_image_url} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{props.product_name}</h3>
        <p className="product-description">{props.product_description}</p>
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
        <button>Message User</button>
      </div>
    </div>
  );
}

export default ProductList;
