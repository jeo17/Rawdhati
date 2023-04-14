import React from "react";
import { NavLink } from "react-router-dom";
import "./topcloud.css";
import { useContext } from "react";
import ThemeContext from "../context/Theme";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Topcloud = ({ height }) => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  const { switched, Switched, Theme, Bird, Face, Body, theme } =
    useContext(ThemeContext);


    const [Language, setLanguage] = useState("Language");
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
              style={{ textDecoration: "none", color: "black" , padding:"10px 40px" }}
            >
              Home
            </NavLink>
          </button>
        )}

        {!user && (
          <button>
            <NavLink to="/" style={{ textDecoration: "none", color: "black", padding:"10px 40px" }}>
              Start
            </NavLink>
          </button>
        )}

        {!user && (
          <button>
            <NavLink
              to="/help"
              style={{ textDecoration: "none", color: "black" , padding:"10px 40px"}}
            >
              help
            </NavLink>
          </button>
        )}

        <button>
          
          <NavLink
            to="/about-us"
            style={{ textDecoration: "none", color: "black" , padding:"10px 40px"}}
          >
            
            about us
          </NavLink>
        </button>
       
       <button>
        <div className="sl-nav" style={{ padding:"10px 40px"}}>
          <ul>
            <li>
              <b style={{padding:"10px 0", marginRight:"8px"}}><i className={`sl-flag flag-${flag}`}></i> {Language}</b>
              <i className="fa fa-angle-down" aria-hidden="true" />
              <div className="triangle" />
              <ul>
                <li dir="rtl" onClick={(eo) => {
                  setLanguage("العربية");
                  setflag("ar")
                  document.getElementById("en").style.color="#3c3c3c";
                  document.getElementById("fr").style.color="#3c3c3c";
                  document.getElementById("ar").style.color="#00a5bb";
                }}>
                  <i className="sl-flag flag-ar">
                  </i>
                  <span id="ar" style={{paddingRight:"5px",paddingLeft:"0"}} className="active">العربية</span>
                </li>
                <li onClick={(eo) => {
                  setLanguage("English")
                  setflag("en")
                  document.getElementById("ar").style.color="#3c3c3c";
                  document.getElementById("fr").style.color="#3c3c3c";
                  document.getElementById("en").style.color="#00a5bb";

                }}>
                  <i className="sl-flag flag-en">                 
                  </i>
                  <span id="en">English</span>
                </li>
                <li onClick={(eo) => {
                  setLanguage("Français")
                  setflag("fr")
                  document.getElementById("en").style.color="#3c3c3c";
                  document.getElementById("ar").style.color="#3c3c3c";
                  document.getElementById("fr").style.color="#00a5bb";
                }}>
                  <i className="sl-flag flag-fr">              
                  </i>
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
              <img src={require("./assets/avatar.jpg")} alt="" />
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
                    My profile
                  </NavLink>
                </li>

                <li>
                  <img src={require("./assets/icons/envelope.png")} alt="" />
                  <NavLink to="#">Inbox</NavLink>
                </li>
                <li>
                  <img src={require("./assets/icons/settings.png")} alt="" />
                  <NavLink to="#">Setting</NavLink>
                </li>
                <li>
                  <img src={require("./assets/icons/question.png")} alt="" />
                  <NavLink to="/help">Help</NavLink>
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
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/*user && 
                 
                 
                 <select className="circle" value="AD">
                 <option style={{display:"none"}}>AD</option>
                 <option>profile</option>
                 <option >sign out</option>
               </select>*/}
      </div>
    </>
  );
};

export default Topcloud;
