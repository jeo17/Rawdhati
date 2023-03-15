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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur voluptas inventore ab voluptates nostrum minus illo
            laborum harum laudantium earum ut.
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
