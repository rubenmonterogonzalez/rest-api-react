import React from 'react'
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="searchBar">
            <form>
                <input type="text" placeholder='Search for a country...' />
            </form>
        </div>
    )
}

export default SearchBar