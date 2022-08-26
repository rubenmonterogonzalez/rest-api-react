import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../../components/CountryCard/CountryCard";
import "./GridTemplate.scss";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const GridTemplate = () => {
  const [countries, getCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios
      .get(url)
      .then((response) => {
        const allCountries = response.data;
        getCountries(allCountries);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  
  return (
    <div className="gridTemplate">
      <div className="flex">
        <SearchBar setSearch={(str) => setSearch(str)} countries={countries}/>
        <Filter />
      </div>
      <CountryCard countries={countries} />
    </div>
  );
};

export default GridTemplate;
