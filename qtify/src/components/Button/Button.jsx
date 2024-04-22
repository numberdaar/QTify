import React from 'react';
import style from "./Button.module.css"

const FeedbackButton = ({ text }) => {
  return (
    <button className={style.button}>{text}</button>
  );
};

export default FeedbackButton;