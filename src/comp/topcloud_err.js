import React from 'react';
import { NavLink } from 'react-router-dom';
import {useContext } from "react";
import ThemeContext from "../context/Theme";

const TopcloudErr = (height) => {

    const {switched,Switched,Theme,Bird,Face,Body,theme} = useContext(ThemeContext);

    return (
        <>
            
            <div className="topcloud" style={{height:`${height}`}}>

           
           <button>language</button>
 
          <input type="checkbox" id="switch" onClick={() => { Theme(); Switched() ; Bird(); Face(); Body();
            localStorage.setItem("lastTheme",theme)
          }}/>
              <div className={`${switched} switch-btn `}> 
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

export default TopcloudErr;
