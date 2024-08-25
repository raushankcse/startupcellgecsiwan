import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () =>{
  const navigate = useNavigate();
  const handleButtonClick = ()=> {
    navigate('/instagram');
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
        <img src="/quiz2.png" alt="Image outside circle" className="circle-image"/>
        <p className="circle-text">To start the quiz follow the <br />following steps</p>
        <button onClick={handleButtonClick} className="circle-button">Next <span className="symbol">&gt;</span></button>
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
};

export default Home;