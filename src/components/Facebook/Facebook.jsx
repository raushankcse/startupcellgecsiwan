import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon

const Facebook = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Store a flag in localStorage to check if the user is returning from Facebook
    localStorage.setItem("redirectedToFacebook", "true");

    // Attempt to open the Facebook page in the app
    window.location.href = "fb://page/SCellGecSiwan";

    // Fallback to the Facebook web profile if the app is not installed
    setTimeout(() => {
      window.location.href = "https://www.facebook.com/SCellGecSiwan?mibextid=ZbWKwL";
    }, 1000); // Wait 1 second before falling back
  };

  useEffect(() => {
    // Check if the user was redirected to Facebook and has returned
    const redirected = localStorage.getItem("redirectedToFacebook");
    if (redirected) {
      // Clear the flag from local storage
      localStorage.removeItem("redirectedToFacebook");

      // Navigate to the Twitter page after returning
      navigate("/twitter");
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
        <p className="circle-text">To start the quiz follow the <br /> following steps</p>
        <button onClick={handleButtonClick} className="circle-button">
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }} /> {/* Facebook icon */}
          Follow <span className="symbol">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Facebook;
