import React from "react";
import "../styles/searchbar.css";

const SearchBar = ({ handleSearch, searchInput, placeholder }) => {
  return (
    <input
      type="text"
      value={searchInput}
      onChange={handleSearch}
      placeholder={placeholder}
      className="search-input"
    />
  );
};

export default SearchBar;
