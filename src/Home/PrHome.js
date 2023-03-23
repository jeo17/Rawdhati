import React from "react";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Profile from "../comp/Profile";
import Slider from "../comp/Slider";
import Page404 from "../Page_404";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendEmailVerification } from "firebase/auth";


const PrHome = () => {
  const h1 = document.getElementById("h1"),
    banner2 = document.getElementById("banner2"),
    button = document.querySelector(".search-container");

  const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 150) {
      banner2.style.backgroundSize = "130%";
      h1.style.opacity = 0;
      h1.style.translate = "0 -50px";
      h1.style.scale = "0.9";
      button.style.opacity = 0;
      button.style.translate = "0 -50px";
      button.style.scale = "0.8";
    } else {
      banner2.style.backgroundSize = "100%";
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
            <div id="banner2" className="banner2">
              <h1 id="h1">welcome {user.displayName}</h1>

              <div className="search-container">
                <input className="search-main" placeholder="Search for a kindergarten"/>

                  <span className="searchicon" />
                  
                  <div className="microphone" onClick={(eo) => {
                   const holder = document.querySelector(".icon-holder");
                   const icons = document.querySelectorAll(".icon");
                   
                   if (holder.style.visibility === "visible") {
                    holder.style.visibility = "hidden";
                    icons.forEach(icon => {
                      icon.style.animation = "";
                     });
                   } else {
                    holder.style.visibility = "visible";
                    icons.forEach(icon => {
                    icon.style.animation = "ani 2.2s ease-out infinite";
                   });
                   }                
                  }}>
                     <label style={{cursor:"pointer"}}> search by</label>
                  <span class="material-symbols-outlined">  filter_list  </span>
               </div>
                
                <div className="icon-holder">
                  <div className="icon" id="Price">
                  <span class="material-symbols-outlined circ">attach_money</span>
                  <div className="tooltip">Price</div>
                  </div>
                  <div className="icon" id="Place">
                  <span class="material-symbols-outlined circ">location_on</span>
                    <div className="tooltip">Place</div>
                  </div>
                  <div className="icon" id="Activ">
                  <span class="material-symbols-outlined circ">extension</span>
                    <div className="tooltip">Activite</div>
                  </div>
                  <div className="icon" id="Trending">
                    <span className="material-symbols-outlined circ">star</span>
                    <div className="tooltip">Trending</div>
                  </div>
                  <div className="icon" id="All">
                    <div className="dots" />
                    <div className="tooltip">All</div>
                  </div>
                </div>
              </div>
            </div>




           <div className="pr-card">
            
           <Slider />
            
            </div> 

          </div>
          <Botcloud />
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
