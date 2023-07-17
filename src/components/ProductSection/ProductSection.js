import { Fragment } from "react";
import "./ProductSection.css";
import ProductList from "./ProductList";

function ProductSection(props) {
  return (
    <div className="product-container">
      <h2>Product Section</h2>
      <ProductList products={props.products[0]} />
      <ProductList products={props.products[1]} />
      <ProductList products={props.products[2]} />
      <ProductList products={props.products[3]} />
    </div>
  );
}
export default ProductSection;
