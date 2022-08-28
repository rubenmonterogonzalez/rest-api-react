import axios from "axios";
import React, { useEffect } from "react";
import './Filter.scss'

const Filter = (countries, setCountries) => {
  const region = [
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

  function handleSubmit(e) {
    e.preventDefault();
  }

  // const filterRegions = async (region) => {
  //   await axios
  //     .get(`https://restcountries.com/v3.1/region/${region}`)
  //     .then((response) => {
  //       const region = response.data;
  //       setCountries(region);
  //     })
  //     .catch((error) => console.error(`Error: ${error}`));
  // };

  const filterRegions = async (region) => {
    console.log(region);
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(url);
    const data = await res.json();
    setCountries(data);
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
