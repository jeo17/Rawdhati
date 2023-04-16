import React from "react";
import "./sign_pr.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import NeedToSignOut from "../needToSignOut";
import ForgetPass from "../comp/Forget-pass";
import Page404 from "../Page_404";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase/config";
import { useTranslation } from 'react-i18next';



const SignPr = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailIN, setemail_IN] = useState("");
  const [passwordIN, setpassword_IN] = useState("");

  const [userName, setuserName] = useState("");

  const [marginLeft, setMargin] = useState("50%");
  const [marginLeft1, setMargin1] = useState("0");

  const [errMsg_signin, seterrMsg_signin] = useState("");
  const [errMsg_signup, seterrMsg_signup] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const { t, i18n } = useTranslation();



  if (loading) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }



  if (error) {
    return (
      <>
        <Page404 />
      </>
    );
  }




  return (
    <>
      {!user && (
        <div className=" main">
          <Topcloud height="22%" />
          <div className="signcont">
            <div id="back">
              <div className="backRight" />
              <div className="backLeft" />
            </div>
            <div
              id="slideBox"
              style={{ marginLeft: `${marginLeft}`, transition: "1s all" }}
            >
              <div
                className="topLayer"
                style={{ marginLeft: `${marginLeft1}`, transition: "1s all" }}
              >
                <div className="left">
                  <div
                    className="content"
                    style={{ position: "absolute", top: "21%" }}
                  >
                    <h2 dir="auto">{i18n.language === "en" && "Sign Up"}{i18n.language === "ar" && "انشئ حساب"}{i18n.language === "fr" && "S'inscrire"}</h2>
                    <form method="post">
                      <div className="form-group">
                        <input
                          dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"}
                          type="text"
                          placeholder={i18n.language === "en" || i18n.language === "fr"?"User Name":"اسم المستخدم"}
                          required
                          onChange={(eo) => {
                            setuserName(eo.target.value);
                          }}
                        />
                        <input
                          dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"}
                          type="email"
                          placeholder={i18n.language === "en" || i18n.language === "fr"?"Email":"البريد الالكتروني"}
                          required
                          onChange={(eo) => {
                            setemail(eo.target.value);
                          }}
                        />
                        <input
                          dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"}
                          type="password"
                          placeholder={i18n.language === "en" || i18n.language === "fr"?"Password":"كلمة المرور"}
                          required
                          onChange={(eo) => {
                            setpassword(eo.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group" />
                      <div className="form-group" />
                      <div className="form-group" />

                      <div className="signButton">
                        <button
                        style={{marginLeft:i18n.language === "ar"? "42px":null,fontFamily:i18n.language === "ar"? "'Noto Sans Arabic', sans-serif":null}}
                          onClick={(eo) => {
                            eo.preventDefault();

                            createUserWithEmailAndPassword(
                              auth,
                              email,
                              password
                            )
                              .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;

                                updateProfile(auth.currentUser, {
                                  displayName: userName,
                                })
                                  .then(async () => {

                                    await setDoc(doc(db, "Parents Informations", user.uid), {
                                      Bio: "Write your own bio"
                                    });  
                                    navigate(`/pr_home/${user.uid}`)

                                  })
                                  .catch((error) => {
                                    console.log("buggg");
                                  });

                                sendEmailVerification(auth.currentUser).then(
                                  () => {
                                    alert("check your email. verification sended!!");
                                  }
                                );

                                
                              })
                              .catch((error) => {
                                const errorCode = error.code;

                                switch (errorCode) {
                                  case "auth/invalid-email":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Wrong Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ بريد إلكتروني خاطئ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Mauvaise adresse mail! ❌ ");
                                    }                
                                    break;

                                  case "auth/user-not-found":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Wrong Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ بريد إلكتروني خاطئ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Mauvaise adresse mail! ❌ ");
                                    }                
                                    break;

                                  case "auth/email-already-in-use":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup(
                                        "❌ Email is already in use ! ❌ "
                                      );
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ البريد الالكتروني قيد الاستخدام بالفعل! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Cet email est déjà utilisé! ❌ ");
                                    }
                                    break;

                                  case "auth/missing-email":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Missing Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ البريد الإلكتروني مفقود! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ E-mail manquant ! ❌ ");
                                    }         
                                    break;

                                  case "auth/wrong-password":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Wrong Password ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ كلمة مرور خاطئة ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Mauvais mot de passe ! ❌ ");
                                    }         
                                    break;

                                    case "auth/weak-password":
                                      if (i18n.language==="en") {
                                        seterrMsg_signup("❌ Weak Password ! ❌ ");
                                      }
                                      if (i18n.language==="ar") {
                                        seterrMsg_signup("❌ كلمة مرور ضعيفة ! ❌ ");
                                      }
                                      if (i18n.language==="fr") {
                                        seterrMsg_signup("❌ Mot de passe faible ! ❌ ");
                                      }         
                                      break;

                                  case "auth/too-many-requests":
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Too many requests, please try aganin later ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ هنالك طلبات كثيرة، الرجاء المحاولة لاحقا! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Il y a trop de demandes. S'il-vous-plait réessayez plus tard ! ❌ ");
                                    }         
                                    break;

                                  default:
                                    if (i18n.language==="en") {
                                      seterrMsg_signup("❌ Please check your email & password ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signup("❌ يرجى التحقق من بريدك الإلكتروني وكلمة المرور! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signup("❌ Veuillez vérifier votre e-mail et votre mot de passe ! ❌ ");
                                    }         
                                    break;
                                }
                                // ..
                              });
                          }}
                        >
                          {i18n.language === "en" && "Sign Up"}{i18n.language === "ar" && "تسجيل"}{i18n.language === "fr" && "S'inscrire"}
                        </button>

                        <p className="sign-err-msg" style={{fontFamily:i18n.language ==="ar"? "'Noto Sans Arabic', sans-serif":null}}>{errMsg_signup}</p>

                        <label dir="auto" id="goLeft" className="off" style={{width: i18n.language === "en"||i18n.language === "fr" ? "319px":"211px",fontFamily:i18n.language === "ar"? "'Noto Sans Arabic', sans-serif":null}}>
                        { i18n.language === "en" && "already have an account?"}
                        { i18n.language === "ar" && "هل لديك حساب؟"}
                        { i18n.language === "fr" && "Vous avez déjà un compte?"}
                          <p
                            onClick={(eo) => {
                              setMargin("50%");
                              setMargin1("0");
                              eo.preventDefault();
                            }}
                          >
                            {i18n.language === "en" && "Sign in"}{i18n.language === "ar" && "سجل الدخول"}{i18n.language === "fr" && "Se connecter"}
                          </p>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <h2 dir="auto">{i18n.language === "en" && "Login"}{i18n.language === "ar" && "تسجيل الدخول"}{i18n.language === "fr" && "Se connecter"}</h2>
                    <form method="post">
                      <div className="form-group">
                        <input
                          dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"}
                          type="email"
                          placeholder={i18n.language === "en" || i18n.language === "fr"?"Email":"البريد الالكتروني"}
                          onChange={(eo) => {
                            setemail_IN(eo.target.value);
                          }}
                        />
                        <input
                          dir={i18n.language === "en" || i18n.language === "fr"?"ltr":"rtl"}                        
                          type="password"
                          placeholder={i18n.language === "en" || i18n.language === "fr"?"Password":"كلمة المرور"}
                          onChange={(eo) => {
                            setpassword_IN(eo.target.value);
                          }}
                        />
                      </div>
                      <div className="signButton">
                        <button 
                         style={{marginLeft: i18n.language === "ar"? "44px":null,fontFamily:i18n.language === "ar"? "'Noto Sans Arabic', sans-serif":null}}
                          id="login"
                          type="submit"
                          onClick={(eo) => {
                            eo.preventDefault();

                            signInWithEmailAndPassword(
                              auth,
                              emailIN,
                              passwordIN
                            )
                              .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;
                                console.log(user);
                                navigate(`/pr_home/${user.uid}`)
                              })
                              .catch((error) => {
                                const errorCode = error.code;
          

                                switch (errorCode) {
                                  case "auth/invalid-email":
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Wrong Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ بريد إلكتروني خاطئ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ Mauvaise adresse mail! ❌ ");
                                    }                
                                    break;

                                  case "auth/user-not-found":
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Wrong Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ بريد إلكتروني خاطئ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ Mauvaise adresse mail! ❌ ");
                                    }                
                                    break;


                                  case "auth/missing-email":
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Missing Email ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ البريد الإلكتروني مفقود! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ E-mail manquant ! ❌ ");
                                    }         
                                    break;

                                    case "auth/weak-password":
                                      if (i18n.language==="en") {
                                        seterrMsg_signin("❌ Weak Password ! ❌ ");
                                      }
                                      if (i18n.language==="ar") {
                                        seterrMsg_signin("❌ كلمة مرور ضعيفة ! ❌ ");
                                      }
                                      if (i18n.language==="fr") {
                                        seterrMsg_signin("❌ Mot de passe faible ! ❌ ");
                                      }         
                                      break;

                                  case "auth/wrong-password":
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Wrong Password ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ كلمة مرور خاطئة ! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ Mauvais mot de passe ! ❌ ");
                                    }         
                                    break;

                                  case "auth/too-many-requests":
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Too many requests, please try aganin later ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ هنالك طلبات كثيرة، الرجاء المحاولة لاحقا! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ Il y a trop de demandes. S'il-vous-plait réessayez plus tard ! ❌ ");
                                    }         
                                    break;

                                  default:
                                    if (i18n.language==="en") {
                                      seterrMsg_signin("❌ Please check your email & password ! ❌ ");
                                    }
                                    if (i18n.language==="ar") {
                                      seterrMsg_signin("❌ يرجى التحقق من بريدك الإلكتروني وكلمة المرور! ❌ ");
                                    }
                                    if (i18n.language==="fr") {
                                      seterrMsg_signin("❌ Veuillez vérifier votre e-mail et votre mot de passe ! ❌ ");
                                    }         
                                    break;
                                }
                              });
                          }}
                        >
                        {i18n.language === "en" && "Login"}{i18n.language === "ar" && "تسجيل"}{i18n.language === "fr" && "connecter"}
                        </button>

                        

                        <p  dir="auto" className="forget-pass" onClick={(eo) => {
                          const forgetPass = document.getElementById("forget-pass");
                          forgetPass.showModal();
                        }}>{i18n.language === "en" && "Forgot password ?"} {i18n.language === "ar" && "هل نسيت كلمة السر ؟"}{i18n.language === "fr" && "Mot de passe oublié ?"}</p>


                        <ForgetPass /> 

                        <p className="sign-err-msg" style={{fontFamily:i18n.language ==="ar"? "'Noto Sans Arabic', sans-serif":null}}>{errMsg_signin}</p>

                        <label id="goRight" className="off" dir="auto" style={{width: i18n.language === "en"||i18n.language === "fr" ? "300px":"205px",fontFamily:i18n.language === "ar"? "'Noto Sans Arabic', sans-serif":null}}>
                          {i18n.language === "en" && "dont have an account?"}{i18n.language === "ar" && "ليس لديك حساب؟"}{i18n.language === "fr" && "vous n'avez pas de compte ?"}
                          <p
                            onClick={(eo) => {
                              setMargin("0");
                              setMargin1("100%");
                              eo.preventDefault();
                            }}
                          >
                            {i18n.language === "en" && "Sign Up"}{i18n.language === "ar" && "انشئ واحد"}{i18n.language === "fr" && "S'inscrire"}
                          </p>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Botcloud margintop="66.1vh" height="22%" />
        </div>
      )}
      {user && <NeedToSignOut />}
    </>
  );
};

export default SignPr;
