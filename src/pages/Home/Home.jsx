import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.scss'
import GridTemplate from '../../components/GridTemplate/GridTemplate';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    const [countries, getCountries] = useState('');

    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = () => {
        axios.get(url)
        .then((response) => {
            const allCountries = response.data;
            getCountries(allCountries);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    return (
        <div className='home'>
            <Navbar />
            <GridTemplate />
        </div>
    )
}

export default Home
