import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">CHAUHAN ABHAY </span>.
         <br /> I am an enthusiastic Front-End Web Developer proficient in cutting-edge technologies such as Html, Css, Java Script, React JS.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/a1.jpg")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;