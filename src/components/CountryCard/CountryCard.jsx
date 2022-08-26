import React from "react";
import "./CountryCard.scss";

const CountryCard = (props) => {
  const displayCountries = (props) => {
    const { countries } = props;

    if (countries.length > 0) {
      return countries.map((country, index) => {
        return (
          <div className="country-card" key={index}>
            <div className="image">
              <img
                src={country.flags.png}
                alt={country.name.common + " " + "flag"}
              />
            </div>
            <div className="content">
              <h2 className="country_name">{country.name.common}</h2>
              <p className="country_name">
                <strong>Population:</strong> {country.population.toLocaleString("de-DE")}
              </p>
              <p className="country_name">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="country_body">
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
          </div>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };
  return <div className="country-grid">{displayCountries(props)}</div>;
};

export default CountryCard;
