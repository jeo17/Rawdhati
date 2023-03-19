import React from "react";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Profile from "../comp/Profile";
import Page404 from "../Page_404";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendEmailVerification } from "firebase/auth";

const PrHome = () => {


  const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner"),
  button = document.getElementById("button");

  const onScroll = (event) => {
  
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 150) {
    banner.style.backgroundSize = "100%";
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = "0.9";
    button.style.opacity = 0;
    button.style.translate = "0 -50px";
    button.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "130%";
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.scale = 1;
  }
};

document.addEventListener("scroll", onScroll);










  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect((eo) => {
    if (!user && !loading) {
      navigate("/Visitor");
    }
  });

  if (loading) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }


  if (error) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
    return (
      <>
        <Page404 />
      </>
    );
  }



  if (!user) {
    navigate("/Visitor");
  }

  if (user.displayName === null) {
    return (
      <>
        <TopcloudErr />
        <div className="main appmain">
          <div
            style={{
              margin: "20vh 27vw",
              fontFamily: "'Fredoka One', cursive",
            }}
          >
            <h2>you did signed in on the wrong space ...</h2>
            <h2>
              {" "}
              click here to signin again in the right space 👉{" "}
              <span
                class="material-symbols-outlined refresh"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      navigate("/kindergarten_sign");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                refresh
              </span>{" "}
            </h2>
          </div>
        </div>
        <Botcloud />
      </>
    );
  } else {
    if (user.emailVerified) {
      return (
        <>
          <Topcloud />

          <Profile />
          <div className="main appmain">
           
            <div id="banner" className="banner">
               <h1 id="h1">welcome {user.displayName}</h1>
               <button id="button" onClick={(eo) => {
                onScroll(eo)
               }}>Get Started</button>
            </div>
          
          </div>
          <Botcloud />
          <div className="kin-card"></div>
          

        </>
      );
    } else {
      return (
        <>
          <Topcloud />

          <Profile />
          <div className="main appmain">
            <div className="errorMsg">
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textAlign: "center",
                }}
              >
                ◘ welcome {user.displayName} ◘<br />
                please verify your email and refesh the page to continue ...{" "}
              </h2>
              <button
                onClick={() => {
                  sendEmailVerification(auth.currentUser).then(() => {
                    console.log("verification sended!!");
                  });
                }}
              >
                send again
              </button>
            </div>
          </div>
          <Botcloud />
        </>
      );
    }
  }
};

export default PrHome;
