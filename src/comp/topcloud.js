import React from 'react';
import { NavLink } from 'react-router-dom';
import "./topcloud.css"

const Topcloud = () => {
    return (
        <>

        <div className="topcloud">
           <button>language</button>
           <button><NavLink to="/help" style={{textDecoration: "none"}}>help</NavLink></button>
           <button> <NavLink to="/about-us" style={{textDecoration: "none"}}> about us</NavLink> </button>
        </div>  

        </>
    );
}

export default Topcloud;
