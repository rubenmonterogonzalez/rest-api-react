import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Country.scss";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  const getCountry = async () => {
    await fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((country) => {
        setCountry(country);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getCountry();
  }, [name]);

  return (
    <section className="country-page">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="">
          <Link className="back-page" to={"/"}>
            &larr; Back
          </Link>
          {country.map((country, index) => {
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
                  <div className="content-grid">
                    <p className="country-native">
                      <strong>Native Name:</strong> {}
                    </p>
                    <p className="country-population">
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString("de-DE")}
                    </p>
                    <p className="country-region">
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p className="country-sub-region">
                      <strong>Sub Region:</strong> {country.subregion}
                    </p>
                    <p className="country-capital">
                      <strong>Capital:</strong> {country.capital}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Country;
