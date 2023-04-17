import React from "react";
import "./Forget-pass.css"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useTranslation } from 'react-i18next';


const ForgetPass = () => {
  const { t, i18n } = useTranslation();

    const [email, setemail] = useState("")
    const [displayMsg, setDisplayMsg] = useState("none")
    const [Msg, setMsg] = useState("")

  return (
    <dialog id="forget-pass">

      <div className="row">

      <span className="material-symbols-outlined"     style={{float:"right" , color:"orange", position:"relative",bottom:"18px",left:"14px",fontWeight:"900",transform:"scale(1.2)",cursor:"pointer"}}
          onClick={() => {
          const forgetPass = document.getElementById("forget-pass");
          forgetPass.close();
       }} >
         close
       </span>



        <h1>{t("forget-pass")}</h1>
        <h5 dir="auto" className="information-text" style={{fontFamily:i18n.language=== "ar"? "'Noto Sans Arabic', sans-serif" : null }}>
          {i18n.language ==="en" && "Enter your registered email to reset your password."}
          {i18n.language ==="ar" && "أدخل بريدك الإلكتروني المسجل لإعادة تعيين كلمة المرور الخاصة بك."}
          {i18n.language ==="fr" && "Entrez votre e-mail enregistré pour réinitialiser votre mot de passe."}
        </h5>
        <div className="form-group">
          <input dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"} type="email" name="user_email" id="user_email" placeholder={i18n.language === "en" || i18n.language === "fr"?"Email":"البريد الالكتروني"} required onChange={(eo) => {
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
