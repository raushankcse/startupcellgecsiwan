import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user was redirected from the form
    const attempted = sessionStorage.getItem("attemptedQuiz");
    if (attempted) {
      // Clear the flag from sessionStorage
      sessionStorage.removeItem("attemptedQuiz");
      // Redirect to the final page or just stay on the quiz page
      navigate("/quiz"); // Redirect to the same quiz page or any other page
    }
  }, [navigate]);

  const handleButtonClick = () => {
    // Mark that the quiz has been attempted
    sessionStorage.setItem("attemptedQuiz", "true");

    // Open the Google Form link in a new tab
    window.open("https://forms.gle/zz7ekEd3PbhgskBS6", "_blank");

    // Redirect to the quiz page (or another page) after opening the form
    navigate("/quiz");
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
        <p className="circle-text">Let's start your quiz</p>
        <button onClick={handleButtonClick} className="circle-button">
          Attempt <span className="symbol">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
