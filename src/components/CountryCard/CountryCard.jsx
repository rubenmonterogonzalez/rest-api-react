import React from 'react'
import './CountryCard.scss'

const CountryCard = (props) => {
    const displayCountries = (props) => {
        const { menu, countries } = props;

        if (countries.length > 0) {
            return (
                countries.map((country, index) => {
                    const poulationNumber = country.population.toLocaleString("de-DE");
                    console.log(country);
                    return (
                        <div className="country-card" key={country.id}>
                            <div className='image'>
                                <img src={country.flags.png} alt={country.name.common + ' ' + "flag"} />
                            </div>
                            <div className="content">
                                <h2 className='country_name'>{country.name.common}</h2>
                                <p className='country_name'><strong>Population:</strong> {poulationNumber}</p>
                                <p className='country_name'><strong>Region:</strong> {country.region}</p>
                                <p className='country_body'><strong>Capital:</strong> {country.capital}</p>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return (
                <h3>No countries yet</h3>
            )
        }
    }
    return (
        <div className='country-grid'>
            {displayCountries(props)}
        </div>
    )

}

export default CountryCard;