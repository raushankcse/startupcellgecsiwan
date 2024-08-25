import React from "react";
import { useNavigate } from "react-router-dom";


const Quiz  = () =>{
  const navigate = useNavigate();
  const handleButtonClick = ()=> {
    navigate('/form');
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


      <div class="background-container">
        <div class="large-circle"></div>
        <div class="small-circle"></div>
        <img src="/quiz2.png" alt="Image outside circle" class="circle-image"/>
        <p class="circle-text">To start the quiz follow the <br />following steps</p>
        <button onClick={handleButtonClick} class="circle-button"><span></span>Follow <span className="symbol">&gt;</span></button>
     </div>

      {/* <div className="footer">
        <div class="large-circle">
          <div class="small-circle">
            <img className="circle-image" src="/quiz2.png" alt="" />
            <h1 className="circle-text">To start the quiz follow <br /> the following steps</h1>
            <button className="circle-button">Next</button>
          </div>
        </div>
      </div> */}

        {/* <div className="content">
          <div className="goal-image">
            <img className="quiz-img2" src="/quiz2.png" alt="" />
          </div>
          <div className="start">
            <h1 className="quiz-start-text">To start the quiz follow <br /> the following steps</h1>
          </div>
          <div className="button">
            <button className="btn">Next</button>
          </div>
        </div> */}

    </div>
  );
}

export default Quiz;