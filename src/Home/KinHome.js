import React from 'react';
import "./home.css"
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from '../comp/topcloud_err';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from '../comp/Profile';
import {signOut,sendEmailVerification } from "firebase/auth";


const KinHome = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading) {
            navigate("/Visitor");
        }

        
    })
     
    
    if (loading) {
        return (
          <div>
            <p>Initialising User...</p>
          </div>
        );
      }

      if(!user){
        navigate("/Visitor");
      }

  
      if(user.displayName===null){


         if (user.emailVerified) {
          
          return (
            <>
            <Topcloud />
            <Profile />
            <div className="main appmain">
             <h2 style={{margin:"30vh 40vw 30vh 40vw", fontFamily:"'Fredoka One', cursive"}}>welcome to el-rawdat</h2>
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

      }


      else{
        return(
              <>
                <TopcloudErr />
                <div className="main appmain">
                  <div style={{margin:"20vh 27vw", fontFamily:"'Fredoka One', cursive"}} >

                   <h2 >you did signed in on the wrong space ...</h2>
                   <h2> click here to signin again in the right space 👉 <span class="material-symbols-outlined refresh"  onClick={() => {
                   
                   signOut(auth).then(() => {
                      navigate("/parent_sign")
                          }).catch((error) => {
                      // An error happened.
                    });

                   }}>refresh</span> </h2>
                   
                  </div>
                   
                </div>
                <Botcloud />
              </>
        )
        
      }


    
}



export default KinHome;
