import React from 'react';
import "./sign_pr.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import { useState } from "react";


const SignPr = () => {

  const [marginLeft, setMargin] = useState("50%");
  const [marginLeft1, setMargin1] = useState("0");
  
    return (
        <>
   
     <div className=' main'>
     <Topcloud height="24%"/>
     <div className='signcont'>
     <div id="back">
      
    <div className="backRight" />
    <div className="backLeft" />
  </div>
  <div id="slideBox" style={{marginLeft: `${marginLeft}`, transition: "1s all"}}>
    <div className="topLayer" style={{marginLeft: `${marginLeft1}`, transition: "1s all"}}>
      <div className="left">
        <div className="content">
          <h2>Sign Up</h2>
          <form method="post" onsubmit="return false;">
            <div className="form-group">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group" />
            <div className="form-group" />
            <div className="form-group" />
          </form>
          <button id="goLeft" className="off" onClick={() => {   setMargin("50%") ; setMargin1("0")    }}>
            Login
          </button>
          <button>Sign up</button>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h2>Login</h2>
          <form method="post" onsubmit="return false;">
            <div className="form-group">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </div>
            <button id="goRight" className="off" onClick={(eo) => { setMargin("0") ; setMargin1("100%") ;eo.preventDefault()   }}>
              Sign Up
            </button>
            <button id="login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Botcloud margintop="63.2vh"  height="24%"/>
  </div>

        </>
    );
}

export default SignPr;
