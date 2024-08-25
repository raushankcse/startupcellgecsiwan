import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon

const Facebook = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    // Mark that the user attempted to follow on Facebook
    sessionStorage.setItem("attemptedFacebook", "true");

    // Attempt to open the Facebook app with the user profile
    window.location.href = "fb://page/SCellGecSiwan";

    // Fallback to the web version if the app is not installed
    setTimeout(() => {
      window.location.href = "https://www.facebook.com/SCellGecSiwan?mibextid=ZbWKwL";
      setShowButton(true); // Show the next button after fallback
    }, 1000); // Wait 1 second before falling back
  };

  useEffect(() => {
    // Check if the user was redirected from Facebook and has returned
    const attempted = sessionStorage.getItem("attemptedFacebook");
    if (attempted) {
      // Clear the flag from session storage
      sessionStorage.removeItem("attemptedFacebook");
      // Show the next button since the user returned from the Facebook attempt
      setShowButton(true);
    }
  }, [navigate]);

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
        <p className="circle-text">Follow our Facebook</p>
        <button onClick={handleButtonClick} className="circle-button">
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '15px' }} />
          Follow <span className="symbol">&gt;</span>
        </button>

        {/* Show the "Next" button only if showButton is true */}
        {showButton && (
          <button onClick={() => navigate("/twitter")} className="circle-button">
            Next Page <span className="symbol">&gt;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Facebook;
