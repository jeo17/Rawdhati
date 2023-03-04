import React from 'react';
import "./sign_pr.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import { useState } from "react";
/*import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from '../firebase/config';
import { useNavigate } from "react-router-dom";*/




const SignPr = () => {

 /*   const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailIN, setemail_IN] = useState("");
  const [passwordIN, setpassword_IN] = useState("");*/

  const [marginLeft, setMargin] = useState("50%");
  const [marginLeft1, setMargin1] = useState("0");

  

  
    return (
        <>
   
     <div className=' main'>
     <Topcloud height="22%"/>
     <div className='signcont'>
     <div id="back">
      
    <div className="backRight_kin"/>
    <div className="backLeft_kin"/>
  </div>
  <div id="slideBox" style={{marginLeft: `${marginLeft}`, transition: "1s all"}}>
    <div className="topLayer" style={{marginLeft: `${marginLeft1}`, transition: "1s all"}}>
      <div className="left">
        <div className="content">
          <h2>Sign Up</h2>
          <form method="post" onsubmit="return false;">
            <div className="form-group">
              <input type="email" placeholder="Email" required /*onChange={(eo) => { setemail(eo.target.value)  }}*//>
              <input type="password" placeholder="Password" required /* onChange={(eo) => { setpassword(eo.target.value)  }}*//>
            </div>
            <div className="form-group" />
            <div className="form-group" />
            <div className="form-group" />

            <div className='signButton'>
         
          <button /*onClick={(eo) => {
             eo.preventDefault();

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("done")
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
              // ..
            });
          }}*/>Sign up</button>

          <p id="goLeft" className="off">
           already have an account?<h4  onClick={(eo) => {   setMargin("50%") ; setMargin1("0") ; eo.preventDefault()   }}>Sign in</h4>
          </p>
          </div>


          </form>
        
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h2>Login</h2>
          <form method="post" onsubmit="return false;">
            <div className="form-group">
              <input type="email" placeholder="Email" /* onChange={(eo) => {  setemail_IN(eo.target.value) }}*//>
              <input type="password" placeholder="Password" /*onChange={(eo) => {  setpassword_IN(eo.target.value) }}*//>
            </div>
            <div className='signButton'>
            
            <button id="login" type="submit"/* onClick={(eo) => {
              eo.preventDefault();

              signInWithEmailAndPassword(auth, emailIN, passwordIN)
                 .then((userCredential) => {
                   // Signed in 
                   const user = userCredential.user;
                   console.log(user);
                   navigate("/PrHome");
                 })
                 .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   console.log(errorMessage);
                 });
            }} */>
              Log in
            </button>

            <p id="goRight" className="off" >
             dont have an account? <h4  onClick={(eo) => { setMargin("0") ; setMargin1("100%") ;eo.preventDefault()   }}>Sign Up</h4>
            </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Botcloud margintop="66.1vh"  height="22%"/>
  </div>

        </>
    );
}

export default SignPr;
