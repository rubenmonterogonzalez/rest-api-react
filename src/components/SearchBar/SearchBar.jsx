import React, { useState, useCallback } from "react";
import "./SearchBar.scss";

const SearchBar = ({ setSearch, countries }) => {
  const [items, setItems] = useState([]);


  const filterIt = (terms, arr) => {
    if ("" === terms || terms.length < 3) return arr;
    const words = terms.match(/\w+|"[^"]+"/g);
    words.push(terms);
    return arr.filter((a) => {
      const v = Object.values(a);
      const f = JSON.stringify(v).toLowerCase();

      return words.every(val => f.includes(val));
    });
  };

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, countries.name.common);
    setItems(updatedList);
  }, []);

  return (
    <div className="searchBar">
      <form>
        <input
          onChange={filterList}
          type="text"
          name="Country Search"
          placeholder="Search for a country..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
