import React from "react";

const FilterRegion = ({setFiltered}) => {
  return (
    <div className="filter-region">
      <select
        onChange={(e) => {
          setFiltered(e.target.value);
        }}
        className="select-region"
        aria-label="Filter Countries By Region"
      >
        <option value="All">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default FilterRegion;
