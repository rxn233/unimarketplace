import { Fragment, useEffect, useState } from "react";
import "./ProductSection.css";
import ProductList from "./ProductList";
import FilterSection from "../FilterSection/FilterSection";

const port = 3001;

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the Express backend when the component mounts
    fetch(`http://localhost:${port}/home`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="product-container">
      <div className="filter-section">
        <FilterSection />
      </div>
      <div className="product-section">
        {products.map((i) => (
          <ProductList
            key={i.product_id + 1}
            product_id={i.product_id}
            product_name={i.product_name}
            product_image_url={i.product_image_url}
            product_price = {i.product_price}
            product_description = {i.product_description}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductSection;
