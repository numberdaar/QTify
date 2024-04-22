import React from 'react';
// import './SearchBar.css'; 
import Searchlogo from "../../assets/search-icon.svg"

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search a song of your choice" />
      <button><img src={Searchlogo} alt="Search Icon" /></button>
    </div>
  );
};

export default SearchBar;