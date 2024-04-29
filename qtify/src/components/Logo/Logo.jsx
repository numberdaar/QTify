import React from 'react';
import styles from "./Logo.module.css"
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="QTify Logo"  width= "67px" height= "34px" />
    </div>
  );
};

export default Logo;