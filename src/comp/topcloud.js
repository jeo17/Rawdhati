import React from 'react';
import { NavLink } from 'react-router-dom';
import "./topcloud.css"
import {useContext } from "react";
import ThemeContext from "../context/Theme";

const Topcloud = () => {
    const {Theme} = useContext(ThemeContext);
    return (
        <>
 
        <div className="topcloud">
           <button><NavLink to="/" style={{textDecoration: "none" ,color: "black"}}>Home</NavLink></button>
           <button><NavLink to="/help" style={{textDecoration: "none" ,color: "black"}}>help</NavLink></button>
           <button> <NavLink to="/about-us" style={{textDecoration: "none",color: "black"}}> about us</NavLink> </button>
           <button>language</button>
 
          <input type="checkbox" id="switch" onChange={() => {  Theme()  }} />
              <div className="switch-btn">
                <label htmlFor="switch">
                  <div className="icons">
                  <span class="material-symbols-outlined">light_mode</span>
                  <span class="material-symbols-outlined">dark_mode</span>
                  </div>
                </label>
              </div>


        </div>  

        </>
    );
}

export default Topcloud;
