import React from "react";
import "./home.css";
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from "../comp/topcloud_err";
import Page404 from "../Page_404";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../comp/Profile";
import { signOut, sendEmailVerification } from "firebase/auth";

const KinHome = () => {


  


  const Next = () => {

    


      let i = document.querySelector(".activated_feild");


      let current_fs = i;
      let next_fs = document.getElementById(Number(i.id) + 1)

   console.log(current_fs)
   console.log(next_fs)

       current_fs.style.display = "none";
        next_fs.style.display = "block";
        
        current_fs.classList.remove("activated_feild");
        next_fs.classList.add("activated_feild");

        if (current_fs.id === "1") {
          document.querySelector(".progress_holder:nth-child(1)").classList.add("activated_step");
        }
        if (current_fs.id === "2") {
          document.querySelector(".progress_holder:nth-child(2)").classList.add("activated_step");
        }
        if (current_fs.id === "3") {
          document.querySelector(".progress_holder:nth-child(3)").classList.add("activated_step");
        }
        if (current_fs.id === "4") {
          document.querySelector(".progress_holder:nth-child(4)").classList.add("activated_step");
        }
        if (current_fs.id === "5") {
          document.querySelector(".progress_holder:nth-child(5)").classList.add("activated_step");
        }
      
  }




  const Prev = (e) => {
    
    
    let i = document.querySelector(".activated_feild");


      let current_fs = i;
      let prev_fs = document.getElementById(Number(i.id) - 1)

      console.log(current_fs)
      console.log(prev_fs)

       current_fs.style.display = "none";
       prev_fs.style.display = "block";
        
        current_fs.classList.remove("activated_feild");
        prev_fs.classList.add("activated_feild");

     if (current_fs.id === "2") {
       document.querySelector(".progress_holder:nth-child(1)").classList.remove("activated_step");
      }
    if (current_fs.id === "3") {
      document.querySelector(".progress_holder:nth-child(2)").classList.remove("activated_step");
    }
    if (current_fs.id === "4") {
      document.querySelector(".progress_holder:nth-child(3)").classList.remove("activated_step");
    }
    if (current_fs.id === "5") {
      document.querySelector(".progress_holder:nth-child(4)").classList.remove("activated_step");
    }
   
    
  
  }
  






  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/Visitor");
    }
  });

  if (loading) {
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
    if (user.emailVerified) {
      return (
        <>
          <Topcloud />
          <Profile />

          <div className="main appmain">
            <dialog id="kin-dialog" open>
              <form className="kin-form ">


                <div id="multi_step_form">
                  <div className="container-kin flex">
                    <div id="multistep_nav">
                      <div className="progress_holder">Kindergarten Name</div>
                      <div className="progress_holder">Kindergarten Address</div>
                      <div className="progress_holder">Kindergarten Picture</div>
                      <div className="progress_holder">Kindergarten Activites</div>
                      <div className="progress_holder">kindergarten monthly payment</div>
                    </div>


                  
                    <div className="content-kin-form">


                    <fieldset className="step activated_feild" id="0">
                      <div className="open-kin-dialog-form"> 
                      <h2>One last step and we will open a space for you </h2>
                      <h3>Please put your information down</h3>
                      </div>
                   
                      <button className="nextStep" onClick={(eo) => { eo.preventDefault();  Next();   }}>Next</button>
                    </fieldset>

                    <fieldset className="step" id="1">
                     <label>Kindergarten Name</label>
                     <br/>
                     <br/>
                      <input  type="text" placeholder="Rawdhat:" required/>
                      <button className="nextStep" onClick={(eo) => { eo.preventDefault();  Next();   }}>Next</button>
                    </fieldset>
                    <fieldset className="step" id="2">
                      <button className="prevStep"  onClick={(eo) => {  eo.preventDefault(); Prev();   }}>Prev</button>
                      <label>Kindergarten Address</label>
                      <br/>
                     <br/>
                      <input  type="text" required placeholder="address" />
                      <button className="nextStep"  onClick={(eo) => { eo.preventDefault();  Next();   }}>Next</button>
                    </fieldset>
                    <fieldset className="step" id="3">
                      <button className="prevStep"  onClick={(eo) => { eo.preventDefault();  Prev();   }}>Prev</button>
                      <label>Kindergarten Picture</label>
                      <br/>
                     <br/>
                      <input  type="file" placeholder="add picture"/>
                      <button className="nextStep"  onClick={(eo) => { eo.preventDefault();  Next();   }}>Next</button>
                    </fieldset>
                    <fieldset className="step" id="4">
                      <button className="prevStep" onClick={(eo) => { eo.preventDefault();  Prev();   }}>Prev</button>
                      <div className="kin-form-header" >
                      <label>Kindergarten Activites</label>
                      <br/> <br/> 
                      <p>Choose the activites that your kindergarten do :</p>
                      </div>



                    <div className="activites">

                    <div className="activite"> <input type="checkbox" id="Travel"/> <lable for="Travel">Travel</lable> </div>  
                     <div className="activite"> <input type="checkbox" id="Language Learning"/> <lable for="Language Learning">Language Learning</lable> </div>
                     <div className="activite"> <input type="checkbox" id="Sports"/> <lable for="Sports">Sports</lable> </div>
                     <div className="activite"> <input type="checkbox" id="Painting "/> <lable for="Painting ">Painting </lable> </div>
                     <div className="activite"> <input type="checkbox" id="Quran "/> <lable for="Quran ">Quran </lable> </div>
                     <div className="activite"> <input type="checkbox" id="Reading "/> <lable for="Reading ">Reading </lable> </div>
                     <div className="activite"> <input type="checkbox" id="other "/> <lable for="other ">Other Things </lable> </div>

                    </div>
                      <button className="nextStep"  onClick={(eo) => {  eo.preventDefault(); Next();   }}>Next</button>
                    </fieldset>
                    <fieldset className="step" id="5">
                      <button className="prevStep"  onClick={(eo) => { eo.preventDefault();  Prev();   }}>Prev</button>
                      <label>kindergarten monthly payment amount</label>
                      <br/> <br/>
                      <input  type="number" placeholder="DA/MONTH"/>
                      <button className="nextStep"  onClick={(eo) => {  eo.preventDefault();  Next();
                      document.querySelector(".kin-form ").style.backgroundColor = "#01c103";
                      setTimeout(() => {
                        document.getElementById("kin-dialog").close();
                      }, 3700);
                      }}>Next</button>
                    </fieldset>

                    <fieldset className="step" id="6">
                      <div  className="kin-form-footer">
                      <h1>Thank You </h1>
                      <h3 >Those information will help people reached your kindergarten</h3>
                      </div>
                    
                    </fieldset>

                    </div>
                   
                  </div>
                </div>


              </form>
            </dialog>
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
                ◘ welcome {user.displayName} el-rawda ◘<br />
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
  } else {
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
                      navigate("/parent_sign");
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
  }
};

export default KinHome;
