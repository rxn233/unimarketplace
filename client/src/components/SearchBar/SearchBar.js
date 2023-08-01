import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  function searchTextHandler(event) {
    setSearchText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onSearch(searchText);
  }

  return (
    <div className="search">
      <div className="search-section">
        <form onSubmit={submitHandler}>
          <label htmlFor="search" />
          <input
            className="search-input"
            onChange={searchTextHandler}
            type="text"
            id="search"
            name="searchquery"
            value={searchText}
            placeholder="Search for a product"
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
