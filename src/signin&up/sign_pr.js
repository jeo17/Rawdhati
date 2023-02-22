import React from 'react';
import "./sign_pr.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import { Link } from 'react-router-dom';


const SignPr = () => {
    return (
        <>
      
      <Topcloud />
     <div className='signcont main'>

  <div className="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      
      <div className="overlay-panel overlay-right">
        <h1>Hi There!</h1>
        <p>Enter your child personal details to open an account with us</p>
        <button className="ghost" id="signUp">
          <Link to="/kindergarten_sign"  style={{textDecoration:"none",color:"black"}}>Sign Up</Link>
          
        </button>
      </div>
    </div>
  </div>
  </div>
  <Botcloud />
        </>
    );
}

export default SignPr;
