import React from "react";
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import Profile from "./comp/Profile";
import { useTranslation } from 'react-i18next';
import "./app.css";
import "./about-us.css";

const AboutUs = () => {
  const { t, i18n } = useTranslation();


if (i18n.language === "fr") {
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
          <h2>à propos de nous</h2>
          <span>{/* line here */}</span>
          <p>
          Rawdhati : C'est un site internet accompagné d'une application qui permet aux parents de trouver plus facilement l'école maternelle adaptée à leurs enfants.
          <br />
          En bref, l'application contient deux fenêtres : une fenêtre pour les parents et une autre pour la maternelle, où l'application affiche toutes les activités réalisées par la maternelle
          </p>
          <ul className="links">
            <li>
              <a href="#">services</a>
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
}

if (i18n.language === "ar") {
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
          <h2  style={{fontFamily:"'Noto Sans Arabic', sans-serif",fontSize:"33px"}}>معلومات عنا</h2>
          <span>{/* line here */}</span>
          <p style={{fontFamily:"'Noto Sans Arabic', sans-serif"}}>
          روضاتي: هو موقع الكتروني مصحوب بتطبيق يسهل على الآباء العثور على روضة أطفال مناسبة لأطفالهم.
          <br />
          باختصار التطبيق يحتوي على نافذتين: نافذة للآباء وأخرى لرياض الأطفال ، حيث يعرض التطبيق جميع الأنشطة التي تقوم بها رياض الأطفال
          </p>
          <ul className="links">
            <li style={{padding: "6px 15px"}}> 
              <a href="#"  style={{fontFamily:"'Noto Sans Arabic', sans-serif" }}>خدمات</a>
            </li>
            <div className="vertical-line" />
            <li  style={{padding: "6px 15px"}}>
              <a href="#"  style={{fontFamily:"'Noto Sans Arabic', sans-serif"}}>اتصال</a>
            </li>
          </ul>
        </div>
      </div>

      <Botcloud />
    </>
  );
}



if (i18n.language === "en") {
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
  In short, the application contains two windows: a window for parents and another for the kindergarten, where the application displays all the activities that the
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
}



 
};

export default AboutUs;
