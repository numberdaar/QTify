import React from 'react';
// import './FeedbackButton.css'; // Module-scoped CSS

const FeedbackButton = ({ text }) => {
  return (
    <button className="feedbackButton">{text}</button>
  );
};

export default FeedbackButton;