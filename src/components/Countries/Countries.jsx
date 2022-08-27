import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Countries.scss";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    await axios
      .get(url)
      .then((response) => {
        const countries = response.data;
        setCountries(countries);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <section className="countries-grid">
      <div className="flex">
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCountries={setCountries}
          countries={countries}
          filter={filter}
          setFilter={setFilter}
        />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : search.length > 1 ? (
        <div className="country-grid">
          {filter.map((country, index) => {
            return (
              <div className="country-card" key={index}>
                <div className="image">
                  <img
                    src={country.flags.png}
                    alt={country.name.common + " " + "flag"}
                  />
                </div>
                <div className="content">
                  <h2 className="country-name">{country.name.common}</h2>
                  <p className="country-population">
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString("de-DE")}
                  </p>
                  <p className="country-region">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="country-capital">
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="countries-grid">
          {countries.map((country, index) => {
            return (
              <div className="country-card" key={index}>
                <div className="image">
                  <img
                    src={country.flags.png}
                    alt={country.name.common + " " + "flag"}
                  />
                </div>
                <div className="content">
                  <h2 className="country-name">{country.name.common}</h2>
                  <p className="country-population">
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString("de-DE")}
                  </p>
                  <p className="country-region">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="country-capital">
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Countries;
