import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2 className="animate__animated animate__slideInLeft">
            Muhammad Arham Khan
          </h2>
          <h1 className="animate__animated animate__slideInLeft">
            Software and Web Developer
          </h1>
          <div className="btns">
            <button className="btnHero animate__animated animate__shakeX animate__delay-3s">
              Contact me
            </button>
            <button className="btnHero animate__animated animate__shakeX animate__delay-3s">
              See my Latest Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
