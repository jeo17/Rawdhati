import React from 'react';
import { NavLink } from 'react-router-dom';
import "./topcloud.css"
import {useContext } from "react";
import ThemeContext from "../context/Theme";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Topcloud = ({height}) => {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const {switched,Switched,Theme,Bird,Face,Body,theme} = useContext(ThemeContext);
    
    
    return (
        <>
        
        <div className="topcloud" style={{height:`${height}`}}>
          {user && <button><NavLink to="/PrHome" style={{textDecoration: "none" ,color: "black"}}>Home</NavLink></button>   }

          {!user && <button><NavLink to="/" style={{textDecoration: "none" ,color: "black"}}>Start</NavLink></button>  }
           
           <button><NavLink to="/help" style={{textDecoration: "none" ,color: "black"}}>help</NavLink></button>
           <button> <NavLink to="/about-us" style={{textDecoration: "none",color: "black"}}> about us</NavLink> </button>
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

              {user && <button onClick={() => {
                signOut(auth).then(() => {
                  navigate("/parent_sign");
                  console.log("signout succ")
                }).catch((error) => {
                  // An error happened.
                });
                
              }}>SignOut</button>   }

                 {user && 
                 
                 
                 <select className="circle" value="AD">
                 <option style={{display:"none"}}>AD</option>
                 <option>profile</option>
                 <option >sign out</option>
               </select>
                   

}
              
        </div>  

        </>
    );
}

export default Topcloud;
