import axios from "axios";
import React, { useEffect } from "react";

const Filter = (countries, setCountries) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const filterRegions = async (region) => {
    await axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        const region = response.data;
        setCountries(region);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    filterRegions();
  }, []);

  const regions = [
    {
      name: "Filter by region",
    },
    {
      name: "Africa",
    },
    {
      name: "Americas",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          name="select"
          onChange={(e) => filterRegions(e.target.value)}
          value={regions.name}
        >
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
