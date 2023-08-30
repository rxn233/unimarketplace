import { Fragment, useEffect, useState } from "react";
import "./FilterSection.css";

function FilterSection(props) {
  const [newProduct, setNewProduct] = useState(false);
  const [usedProduct, setUsedProduct] = useState(false);
  const [sort, setSort] = useState(0);

  function newProductHandler() {
    setNewProduct(!newProduct);
  }
  function usedProductHandler() {
    setUsedProduct(!usedProduct);
  }
  function sortHandler(event) {
    setSort(event.target.value);
  }

  useEffect(() => {
    props.onFilter({ new: newProduct, used: usedProduct, sort: sort });
  }, [newProduct, usedProduct, sort]);

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div>
        <input
          onChange={newProductHandler}
          type="checkbox"
          id="new"
          value={newProduct}
        />{" "}
        <label htmlFor="new">New</label>
        <input
          onChange={usedProductHandler}
          type="checkbox"
          id="used"
          value={usedProduct}
        />{" "}
        <label htmlFor="used">Used</label>
      </div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={sortHandler} value={sort}>
          <option value="0">Relevance</option>
          <option value="1">Price(Low to High)</option>
          <option value="2">Price(High to Low)</option>
        </select>
      </div>
    </div>
  );
}
export default FilterSection;
