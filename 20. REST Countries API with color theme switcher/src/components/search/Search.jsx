import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FilterRegions } from './partials/FilterRegions';

export const Search = (props) => {
  return (
    <div className="searchSection">
      <div className="inputArea">
        <FaSearch className="searchIcon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e) => props.searchCountries(e.target.value)}
        ></input>
      </div>
      <FilterRegions setCountries={props.setCountries} />
    </div>
  );
};
