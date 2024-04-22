import React from 'react';
import Logo from '../Logo/Logo';
import style from "./Navbar.module.css"
import SearchBar from '../SearchBar/SearchBar';
import FeedbackButton from '../Button/Button';


const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Logo />
      <SearchBar />
      <FeedbackButton text="Give Feedback" />
    </div>
  );
};

export default Navbar;