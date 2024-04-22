import React from 'react';
// import './Logo.css'; // Module-scoped CSS
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="QTify Logo" />
    </div>
  );
};

export default Logo;