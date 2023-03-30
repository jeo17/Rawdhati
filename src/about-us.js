import React from "react";
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import Profile from "./comp/Profile";
import "./app.css";
import "./about-us.css";

const AboutUs = () => {
  return (
    <>
      <Topcloud />

      <Profile />

      <div className="about-us">
        <div className="image">
          <img
            src={require('./about-us.png')} alt="sorry"
          />
        </div>
        <div className="content-aboutUs">
          <h2>About Us</h2>
          <span>{/* line here */}</span>
          <p>
          Rawdhati: It is a website accompanied by an application that makes it easier for parents to find the appropriate kindergarten for their children. 
          <br />
  In short, the application contains two windows: a window for parents and another for the kindergarten, where the application displays all the activities that take place
  Kindergarten does
          </p>
          <ul className="links">
            <li>
              <a href="#">service</a>
            </li>
            <div className="vertical-line" />
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>

      <Botcloud />
    </>
  );
};

export default AboutUs;
