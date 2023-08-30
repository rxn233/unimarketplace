import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import FilterSection from "../FilterSection/FilterSection";
import SearchBar from "../SearchBar/SearchBar";
import ProductList from "./ProductList";
import "./ProductSection.css";

const port = 3001;

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [newProduct, setNewProduct] = useState(false);
  const [usedProduct, setUsedProduct] = useState(false);
  const [sort, setSort] = useState(0);
  // console.log(searchData);

  useEffect(() => {
    // Fetch the list of products from the Express backend when the component mounts
    axios
      .get(`http://localhost:${port}/home`, {
        params: {
          text: searchData,
          new: newProduct,
          used: usedProduct,
          sort: sort,
        },
      })
      .then(function (response) {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error");
      });
  }, [searchData, newProduct, usedProduct, sort]);

  function searchHandler(searchText) {
    // console.log('Product section', searchText);
    setSearchData(searchText);
  }

  function filterHandler(filterData) {
    // console.log("Product Section", filterData);
    setNewProduct(filterData.new);
    setUsedProduct(filterData.used);
    setSort(filterData.sort);
  }
  return (
    <Fragment>
      <div>
        <SearchBar onSearch={searchHandler} />
      </div>
      <div className="product-container">
        <div className="filter-section">
          <FilterSection onFilter={filterHandler} />
        </div>
        <div className="product-section">
          {products.map((i) => (
            <ProductList
              key={i.product_id + 1}
              product_id={i.product_id}
              product_name={i.product_name}
              product_image_url={i.product_image_url}
              product_price={i.product_price}
              product_description={i.product_description}
              product_category={i.product_category}
              product_condition={i.product_condition}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default ProductSection;
