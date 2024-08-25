import React from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Open the Google Form link
    window.location.href = "https://forms.gle/zz7ekEd3PbhgskBS6";
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="yellow-logo">
            <img className="logoImg" src="/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="startup">
          <h1 className="startup-text">Startup Cell</h1>
          <h1 className="college-name">Government Engineering College Siwan</h1>
        </div>
        <div className="quiz">
          <img className="quiz-img" src="/quiz.png" alt="Quiz" />
        </div>
      </div>

      <div className="background-container">
        <div className="large-circle"></div>
        <div className="small-circle"></div>
        <img src="/quiz2.png" alt="Image outside circle" className="circle-image" />
        <p className="circle-text">To start the quiz follow the <br /> following steps</p>
        <button onClick={handleButtonClick} className="circle-button">
          Attempt <span className="symbol">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
