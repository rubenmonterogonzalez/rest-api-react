import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({search}) => {
  return (
    <div className="searchBar">
      <form>
        <input
          onChange={(e) => search(e.target.value)}
          type="text"
          name="Country Search"
          htmlFor="Search"
          placeholder="Search for a country..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
