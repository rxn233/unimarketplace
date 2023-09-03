import React, { useState } from "react";
// import "./SearchBar.css";
import styles from "./SearchBar.module.css";
import icon from "../../images/search-icon.png";

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
    <div className={styles["search"]}>
      <div className={styles["search-section"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="search" />
          <input
            className={styles["search-input"]}
            onChange={searchTextHandler}
            type="text"
            id="search"
            name="searchquery"
            value={searchText}
            placeholder="What are you looking for today?"
          />
          <button type="submit" className={styles["search-button"]}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
