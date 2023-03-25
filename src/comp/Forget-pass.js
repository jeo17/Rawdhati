import React from "react";
import "./Forget-pass.css"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";


const ForgetPass = () => {

    const [email, setemail] = useState("")
    const [displayMsg, setDisplayMsg] = useState("none")
    const [Msg, setMsg] = useState("")

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
           setDisplayMsg("none");
          }} />
          <button onClick={(eo) => {
            eo.preventDefault();

            sendPasswordResetEmail(auth, email)
            .then(() => {
              // Password reset email sent!
              setDisplayMsg("block")
              setMsg("✔️ check your email ! ✔️")
            })
            .catch((error) => {
              const errorCode = error.code;
              setDisplayMsg("block")


              switch (errorCode) {
                case "auth/invalid-email":
                  setMsg("❌ Wrong Email ! ❌ ");
                  break;

                case "auth/user-not-found":
                  setMsg("❌ Wrong Email ! ❌ ");
                  break;

                case "auth/missing-email":
                  setMsg("❌ Missing Email ! ❌ ");
                  break;

                default:
                  setMsg(
                    "❌ Please check your email ! ❌ "
                  );
                  break;
              }











              // ..
            });

          }}>Reset Password</button>

        <h5 className="information-text" style={{display:`${displayMsg}`}}>
          {Msg}
        </h5>

        </div>
      </div>
    </dialog>
  );
};

export default ForgetPass;
