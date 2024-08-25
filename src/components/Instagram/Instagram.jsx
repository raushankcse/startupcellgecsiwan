import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Instagram = () => {
  const navigate = useNavigate();
  const [instagramOpened, setInstagramOpened] = useState(false);

  const handleButtonClick = () => {
    localStorage.setItem("redirectedToInstagram", "true");

    // Attempt to open the Instagram app using a deep link
    window.location.href = "instagram://user?username=scellgecsiwan";

    // Set a timeout to check if the Instagram app didn't open (fallback to web)
    setTimeout(() => {
      setInstagramOpened(true); // Now it's okay to show the next button
      window.location.href = "https://www.instagram.com/scellgecsiwan";
    }, 2000);
  };

  useEffect(() => {
    const redirected = localStorage.getItem("redirectedToInstagram");
    if (redirected) {
      // If the user was redirected to Instagram, remove the flag and navigate to the next page
      localStorage.removeItem("redirectedToInstagram");
      navigate("/facebook");
    }
  }, [navigate]);

  const handleNextPageClick = () => {
    // Navigate to the Facebook page
    navigate("/facebook");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="yellow-logo">
            <img className="logoImg" src="/logo.png" alt="" />
          </div>
        </div>
        <div className="startup">
          <h1 className="startup-text">Startup Cell</h1>
          <h1 className="college-name">Government Engineering College Siwan</h1>
        </div>
        <div className="quiz">
          <img className="quiz-img" src="/quiz.png" alt="" />
        </div>
      </div>

      <div className="background-container">
        <div className="large-circle"></div>
        <div className="small-circle"></div>
        <img src="/quiz2.png" alt="Image outside circle" className="circle-image" />
        <p className="circle-text">To start the quiz follow the <br />following steps</p>
        <button onClick={handleButtonClick} className="circle-button">
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "15px" }} /> Follow <span className="symbol">&gt;</span>
        </button>
        {instagramOpened && (
          <button onClick={handleNextPageClick} className="circle-button">
            Proceed to Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Instagram;
