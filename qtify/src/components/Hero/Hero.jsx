import React from 'react';
import styles from "./Hero.module.css";
import heroimage from "../../assets/hero_headphones.png"; 

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={heroimage} alt="Headphones" className={styles.heroimg} />
      <div className={styles.herotext}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>
    </div>
  );
};

export default Hero;