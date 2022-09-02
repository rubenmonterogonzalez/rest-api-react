import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Filter.scss";

const Filter = (countries, setCountries) => {
  // const [regions, setRegions] = useState([]);
  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Americas",
    },
    {
      name: "Oceania",
    },
    {
      name: "Europe",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  const url = `https://restcountries.com/v3.1/region/${region}`;

  const filterRegions = async (region) => {
    await fetch(url)
      .then((response) => response.json())
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    filterRegions();
  }, []);

  return (
    <div className="filter-region">
      <form onSubmit={handleSubmit}>
        <div>
          <select
            name="select"
            onChange={(e) => filterRegions(e.target.value)}
            value={region.name}
            className="select-region"
          >
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
