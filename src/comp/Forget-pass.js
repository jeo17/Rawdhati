import React from "react";
import "./Forget-pass.css"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";


const ForgetPass = () => {

    const [email, setemail] = useState("")
    const [msg, setmsg] = useState("none")

  return (
    <dialog id="forget-pass">

      <div className="row">

      <span class="material-symbols-outlined"     style={{float:"right" , color:"orange", position:"relative",bottom:"18px",left:"14px",fontWeight:"900",transform:"scale(1.2)",cursor:"pointer"}}
          onClick={() => {
          const forgetPass = document.getElementById("forget-pass");
          forgetPass.close();
       }} >
         close
       </span>



        <h1>Forgot Password</h1>
        <h5 className="information-text">
          Enter your registered email to reset your password.
        </h5>
        <div className="form-group">
          <input type="email" name="user_email" id="user_email" placeholder="Email" required onChange={(eo) => {
            setemail(eo.target.value);
           setmsg("none");
          }} />
          <button onClick={(eo) => {
            eo.preventDefault();

            sendPasswordResetEmail(auth, email)
            .then(() => {
              // Password reset email sent!
              setmsg("block")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode)
              // ..
            });

          }}>Reset Password</button>

        <h5 className="information-text" style={{display:`${msg}`}}>
          check your email !!
        </h5>

        </div>
      </div>
    </dialog>
  );
};

export default ForgetPass;
