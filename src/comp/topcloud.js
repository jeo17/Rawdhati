import React from "react";
import { NavLink } from "react-router-dom";
import "./topcloud.css";
import { useContext } from "react";
import ThemeContext from "../context/Theme";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useTranslation } from "react-i18next";

const Topcloud = ({ height, PrID, KinID, HasAnImg }) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  let [Url, seturl] = useState(
    !user
      ? null
      : user.displayName !== null
      ? HasAnImg
        ? getDownloadURL(ref(storage, `/Parents Images/${PrID}`))
            .then((url) => {
              seturl(url);
            })
            .catch((error) => {
              console.log(error.message);
            })
        : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
      : HasAnImg
      ? getDownloadURL(ref(storage, `/Kindergartens Images/${KinID}`))
          .then((url) => {
            seturl(url);
          })
          .catch((error) => {
            console.log(error.message);
          })
      : "https://thumbs.dreamstime.com/b/kindergarten-facade-vector-illustration-preschool-building-front-view-exterior-landscape-background-education-nursery-school-150658496.jpg"
  );
  const { switched, Switched, Theme, Bird, Face, Body, theme } =
    useContext(ThemeContext);

  const [flag, setflag] = useState("lang");
  return (
    <>
      <div className="topcloud" style={{ height: `${height}` }}>
        {user && (
          <button>
            <NavLink
              to={
                user.displayName === null
                  ? `/kin_home/${user.uid}`
                  : `/pr_home/${user.uid}`
              }
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 40px",
              }}
            >
              {t("home")}
            </NavLink>
          </button>
        )}

        {!user && (
          <button>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 40px",
              }}
            >
              {t("start")}
            </NavLink>
          </button>
        )}

        <button>
          <NavLink
            to="/about-us"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "10px 40px",
            }}
          >
            {t("about")}
          </NavLink>
        </button>

        <button>
          <div className="sl-nav" style={{ padding: "10px 40px" }}>
            <ul>
              <li>
                <b style={{ padding: "10px 0", marginRight: "8px" }}>
                  <i className={`sl-flag flag-${flag}`}></i> {t("lang")}
                </b>
                <i className="fa fa-angle-down" aria-hidden="true" />
                <div className="triangle" />
                <ul>
                  <li
                    dir="rtl"
                    onClick={(eo) => {
                      setflag("ar");
                      document.getElementById("en").style.color = "#3c3c3c";
                      document.getElementById("fr").style.color = "#3c3c3c";
                      document.getElementById("ar").style.color = "#00a5bb";
                      i18n.changeLanguage("ar");
                      document.body.style.fontfamily =
                        "'El Messiri', sans-serif !important;";
                    }}
                  >
                    <i className="sl-flag flag-ar"></i>
                    <span
                      id="ar"
                      style={{ paddingRight: "5px", paddingLeft: "0" }}
                      className="active"
                    >
                      العربية
                    </span>
                  </li>
                  <li
                    onClick={(eo) => {
                      setflag("en");
                      document.getElementById("ar").style.color = "#3c3c3c";
                      document.getElementById("fr").style.color = "#3c3c3c";
                      document.getElementById("en").style.color = "#00a5bb";
                      i18n.changeLanguage("en");
                    }}
                  >
                    <i className="sl-flag flag-en"></i>
                    <span id="en">English</span>
                  </li>
                  <li
                    onClick={(eo) => {
                      setflag("fr");
                      document.getElementById("en").style.color = "#3c3c3c";
                      document.getElementById("ar").style.color = "#3c3c3c";
                      document.getElementById("fr").style.color = "#00a5bb";
                      i18n.changeLanguage("fr");
                    }}
                  >
                    <i className="sl-flag flag-fr"></i>
                    <span id="fr">Français</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </button>

        <input
          type="checkbox"
          id="switch"
          onClick={() => {
            Theme();
            Switched();
            Bird();
            Face();
            Body();
            localStorage.setItem("lastTheme", theme);
          }}
        />
        <div className={`${switched} switch-btn `}>
          <label htmlFor="switch">
            <div className="icons">
              <span className="material-symbols-outlined">light_mode</span>
              <span className="material-symbols-outlined">dark_mode</span>
            </div>
          </label>
        </div>

        {user && (
          <div className="action">
            <div
              className="profile"
              onClick={() => {
                const toggleMenu = document.querySelector(".menu");
                toggleMenu.classList.toggle("active");
              }}
            >
              <img src={Url} alt="wait" />
            </div>
            <div className="menu">
              <h3>
                {user.displayName === null ? "el rawda" : `${user.displayName}`}
              </h3>
              <ul>
                <li>
                  <img src={require("./assets/icons/user.png")} alt="" />
                  <NavLink
                    to="#"
                    onClick={(eo) => {
                      const profile = document.getElementById("profile");
                      profile.showModal();
                    }}
                  >
                    {i18n.language === "en" && "My profile"}{" "}
                    {i18n.language === "ar" && "حسابي"}{" "}
                    {i18n.language === "fr" && "Mon profil"}
                  </NavLink>
                </li>

                <li>
                  <img src={require("./assets/icons/envelope.png")} alt="" />
                  <NavLink to={user.displayName === null ? `/Kin-ChatRoom/${KinID}`:"Pr-ChatRoom"}>
                    {i18n.language === "en" && "Inbox"}{" "}
                    {i18n.language === "ar" && "صندوق الوارد"}{" "}
                    {i18n.language === "fr" && "Boîte de réception"}
                  </NavLink>
                </li>
                <li>
                  <img src={require("./assets/icons/settings.png")} alt="" />
                  <NavLink to="#">
                    {i18n.language === "en" && "Settings"}{" "}
                    {i18n.language === "fr" && "Paramètre"}{" "}
                    {i18n.language === "ar" && "إعدادات"}
                  </NavLink>
                </li>
                <li>
                  <img src={require("./assets/icons/question.png")} alt="" />
                  <NavLink to="/help">{t("help")}</NavLink>
                </li>
                <li>
                  <img src={require("./assets/icons/log-out.png")} alt="" />
                  <NavLink
                    to="#"
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          navigate("/");
                        })
                        .catch((error) => {
                          // An error happened.
                        });
                    }}
                  >
                    {i18n.language === "en" && " Logout"}{" "}
                    {i18n.language === "ar" && "تسجيل خروج"}{" "}
                    {i18n.language === "fr" && "Se déconnecter"}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topcloud;
