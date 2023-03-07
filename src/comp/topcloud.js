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
          {user && <button><NavLink to="/pr_home" style={{textDecoration: "none" ,color: "black"}}>Home</NavLink></button>   }

          {!user && <button><NavLink to="/" style={{textDecoration: "none" ,color: "black"}}>Start</NavLink></button>  }
           
           {!user && <button><NavLink to="/help" style={{textDecoration: "none" ,color: "black"}}>help</NavLink></button>}
           
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

              {user && 

               <div className="action">
               <div className="profile" onClick={() => {
                 const toggleMenu = document.querySelector(".menu");
                 toggleMenu.classList.toggle("active");
               }}>
                 <img src={require("./assets/avatar.jpg")} alt=""/>
               </div>
               <div className="menu">
                 <h3>
                  {user.displayName}
                 </h3>
                 <ul>
                   <li>
                     <img src={require("./assets/icons/user.png")}  alt=""/>
                     <NavLink to="#">My profile</NavLink>
                   </li>
                   <li>
                     <img src={require("./assets/icons/envelope.png")} alt=""/>
                     <NavLink to="#">Inbox</NavLink>
                   </li>
                   <li>
                     <img src={require("./assets/icons/settings.png")} alt=""/>
                     <NavLink to="#">Setting</NavLink>
                   </li>
                   <li>
                     <img src={require("./assets/icons/question.png")} alt=""/>
                     <NavLink to="/help">Help</NavLink>
                   </li>
                   <li>
                     <img src={require("./assets/icons/log-out.png")} alt=""/>
                     <NavLink to="#" onClick={() => {
                      signOut(auth).then(() => {
                        navigate("/")
                            }).catch((error) => {
                        // An error happened.
                       });
                
                     }}>Logout</NavLink>                   
                   </li>
                 </ul>
               </div>
             </div>
              }



                 {/*user && 
                 
                 
                 <select className="circle" value="AD">
                 <option style={{display:"none"}}>AD</option>
                 <option>profile</option>
                 <option >sign out</option>
               </select>*/
                   

}
              
        </div>  

        </>
    );
}

export default Topcloud;
