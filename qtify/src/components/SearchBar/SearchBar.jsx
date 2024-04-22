import React from 'react';
// import './SearchBar.css'; 
import Searchlogo from "../../assets/search-icon.svg"
import style from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <div className={style.search}>
      <input type="text" placeholder="Search a song of your choice" />
      <button><img src={Searchlogo} alt="Search Icon" /></button>
    </div>
  );
};

export default SearchBar;