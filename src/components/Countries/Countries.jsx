import React, { useEffect, useState } from "react";
import "./Countries.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import FilterRegion from "../FilterRegion/FilterRegion";
import Loader from "../Loader/Loader";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFiltered] = useState(["All"]);

  const url = "https://restcountries.com/v3.1/all";

  const getAllCountries = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((countries) => {
        setCountries(countries);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const data = Object.values(countries);

  function filterRegions(countries) {
    return countries.filter((country) => {
      if (country.region == filtered) {
        return (newcountry) => {
          country[newcountry].toString().toLowerCase();
        };
      } else if (filtered == "All") {
        return (newcountry) => {
          country[newcountry].toString().toLowerCase();
        };
      }
    });
  }

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
        <FilterRegion setFiltered={setFiltered} />
      </div>
      {isLoading ? (
        <Loader />
      ) : search.length > 0 ? (
        <div className="country-grid">
          {filter.map((country, index) => {
            return (
              <Link to={`/${country.name.common}`} key={index}>
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
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="country-grid">
          {filterRegions(data).map((country, index) => (
            <Link to={`/${country.name.common}`} key={index}>
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
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Countries;
