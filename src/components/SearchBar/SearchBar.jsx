import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({
  filter,
  setFilter,
  search,
  setSearch,
  countries,
  setCountries,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const searchCountries = (searchValue) => {
    setSearch(searchValue);

    if (search) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilter(filteredCountries);
    } else {
      setFilter(countries);
    }
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search for a country..."
          onChange={(e) => searchCountries(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
