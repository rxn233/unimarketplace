import { Fragment } from "react";
import "./FilterSection.css";

function FilterSection(props) {
  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div>
        <input type="checkbox" id="new" /> <label htmlFor="new">New</label>
        <input type="checkbox" id="used" /> <label htmlFor="used">Used</label>
      </div>
    </div>
  );
}
export default FilterSection;
