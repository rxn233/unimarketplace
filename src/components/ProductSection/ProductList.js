import "./ProductList.css";

function ProductList(props) {
  return (
    <div className="product-box">
      <h3 className="product-name">{props.products.product_name}</h3>
      <p className="product-description">
        {props.products.product_description}
      </p>
      <div className="price-container">
        <span className="price-label">Price: </span>
        <span className="product-price">{props.products.product_price}</span>
      </div>
      <div className="price-container">
        <span className="price-label">Estimated Price: </span>
        <span className="product-estimated-price">Estimated AI Price</span>
      </div>
    </div>
  );
}

export default ProductList;
