import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import the Twitter icon

const Twitter = () => {
  const navigate = useNavigate();
  const [showNextButton, setShowNextButton] = useState(false);

  const handleButtonClick = () => {
    // Store a flag in localStorage to check if the user is returning from Twitter
    localStorage.setItem("redirectedToTwitter", "true");

    // Attempt to open the Twitter page in the app
    window.location.href = "twitter://user?screen_name=SCellGecSiwan";

    // Fallback to the Twitter web profile if the app is not installed
    setTimeout(() => {
      setShowNextButton(true); // Show the next button after attempting to open Twitter
      window.location.href = "https://x.com/SCellGecSiwan?t=aK5JjMzs9bHeeyiZCnCGsA";
    }, 1000); // Wait 1 second before falling back
  };

  useEffect(() => {
    // Check if the user was redirected to Twitter and has returned
    const redirected = localStorage.getItem("redirectedToTwitter");
    if (redirected) {
      // Clear the flag from local storage
      localStorage.removeItem("redirectedToTwitter");

      // Navigate to the quiz page after returning
      navigate("/quiz");
    }
  }, [navigate]);

  const handleNextPageClick = () => {
    // Navigate to the quiz page
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
        <p className="circle-text">To start the quiz follow the <br /> following steps</p>
        <button onClick={handleButtonClick} className="circle-button">
          <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '8px' }} /> {/* Twitter icon */}
          Follow <span className="symbol">&gt;</span>
        </button>
        {showNextButton && (
          <button onClick={handleNextPageClick} className="circle-button">
            Proceed to Next Page <span className="symbol">&gt;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Twitter;
