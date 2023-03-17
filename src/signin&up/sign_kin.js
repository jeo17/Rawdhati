import React from "react";
import "./sign_pr.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import NeedToSignOut from "../needToSignOut";
import ForgetPass from "../comp/Forget-pass";
import Page404 from "../Page_404";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignPr = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailIN, setemail_IN] = useState("");
  const [passwordIN, setpassword_IN] = useState("");

  const [marginLeft, setMargin] = useState("50%");
  const [marginLeft1, setMargin1] = useState("0");

  const [errMsg_signin, seterrMsg_signin] = useState("");
  const [errMsg_signup, seterrMsg_signup] = useState("");

  const [user, loading, error] = useAuthState(auth);




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
              <div className="backRight_kin" />
              <div className="backLeft_kin" />
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
                  <div className="content">
                    <h2>Sign Up</h2>
                    <form method="post" onsubmit="return false;">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          onChange={(eo) => {
                            setemail(eo.target.value);
                          }}
                        />
                        <input
                          type="password"
                          placeholder="Password"
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
                          onClick={(eo) => {
                            eo.preventDefault();

                            createUserWithEmailAndPassword(
                              auth,
                              email,
                              password
                            )
                              .then((userCredential) => {
                                const user = userCredential.user;
                                  console.log(user)
                                sendEmailVerification(auth.currentUser).then(
                                  () => {
                                    console.log("verification sended!!");
                                  }
                                );

                                navigate("/kin_home");
                                
                              })
                              .catch((error) => {
                                const errorCode = error.code;
                                console.log(errorCode);
                                switch (errorCode) {
                                  case "auth/invalid-email":
                                    seterrMsg_signup("❌ Wrong Email ! ❌ ");
                                    break;

                                  case "auth/user-not-found":
                                    seterrMsg_signup("❌ Wrong Email ! ❌ ");
                                    break;

                                  case "auth/email-already-in-use":
                                    seterrMsg_signup(
                                      "❌ Email is already in use ! ❌ "
                                    );
                                    break;

                                  case "auth/missing-email":
                                    seterrMsg_signup("❌ Missing Email ! ❌ ");
                                    break;

                                  case "auth/wrong-password":
                                    seterrMsg_signup("❌ Wrong Password ! ❌ ");
                                    break;

                                    case "auth/weak-password":
                                      seterrMsg_signup("❌ Weak Password ! ❌ ");
                                      break;

                                  case "auth/too-many-requests":
                                    seterrMsg_signup(
                                      "❌ Too many requests, please try aganin later ! ❌ "
                                    );
                                    break;

                                  default:
                                    seterrMsg_signup(
                                      "❌ Please check your email & password ! ❌ "
                                    );
                                    break;
                                }

                                // ..
                              });
                          }}
                        >
                          Sign up
                        </button>

                        <p className="sign-err-msg">{errMsg_signup}</p>

                        <p id="goLeft" className="off">
                          already have an account?
                          <h4
                            onClick={(eo) => {
                              setMargin("50%");
                              setMargin1("0");
                              eo.preventDefault();
                            }}
                          >
                            Sign in
                          </h4>
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
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={(eo) => {
                            setemail_IN(eo.target.value);
                          }}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={(eo) => {
                            setpassword_IN(eo.target.value);
                          }}
                        />
                      </div>
                      <div className="signButton">
                        <button
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
                                navigate("/kin_home");
                              })
                              .catch((error) => {
                                const errorCode = error.code;

                                switch (errorCode) {
                                  case "auth/invalid-email":
                                    seterrMsg_signin("❌ Wrong Email ! ❌ ");
                                    break;

                                  case "auth/user-not-found":
                                    seterrMsg_signin("❌ Wrong Email ! ❌ ");
                                    break;

                                  case "auth/email-already-in-use":
                                    seterrMsg_signin(
                                      "❌ Email is already in use ! ❌ "
                                    );
                                    break;

                                  case "auth/missing-email":
                                    seterrMsg_signin("❌ Missing Email ! ❌ ");
                                    break;

                                  case "auth/wrong-password":
                                    seterrMsg_signin("❌ Wrong Password ! ❌ ");
                                    break;

                                    case "auth/weak-password":
                                      seterrMsg_signin("❌ Weak Password ! ❌ ");
                                      break;

                                  case "auth/too-many-requests":
                                    seterrMsg_signin(
                                      "❌ Too many requests, please try aganin later ! ❌ ");
                                    break;

                                  default:
                                    seterrMsg_signin(
                                      "❌ Please check your email & password ! ❌ "
                                    );
                                    break;
                                }
                              });
                          }}
                        >
                          Log in
                        </button>

                        <p className="forget-pass"  onClick={(eo) => {
                          const forgetPass = document.getElementById("forget-pass");
                          forgetPass.showModal();
                        }}>Forgot password ? </p>
                        
                        <ForgetPass />


                        <p className="sign-err-msg">{errMsg_signin}</p>

                        <p id="goRight" className="off">
                          dont have an account?{" "}
                          <h4
                            onClick={(eo) => {
                              setMargin("0");
                              setMargin1("100%");
                              eo.preventDefault();
                            }}
                          >
                            Sign Up
                          </h4>
                        </p>
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
