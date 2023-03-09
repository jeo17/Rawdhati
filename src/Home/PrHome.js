import React from 'react';
import Topcloud from "../comp/topcloud";
import Botcloud from "../comp/botcloud";
import TopcloudErr from '../comp/topcloud_err';
import Profile from '../comp/Profile';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {signOut } from "firebase/auth";


const PrHome = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading) {
            navigate("/Visitor");
        }
    })
     
    if (loading) {
        //if he is in the loading state do this block of code ... and when he done read the rest of the code.
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

        return(
          <>
            <TopcloudErr />
            <div className="main appmain">
              <div style={{margin:"20vh 27vw", fontFamily:"'Fredoka One', cursive"}} >
  
               <h2 >you did signed in on the wrong space ...</h2>
               <h2> click here to signin again in the right space 👉 <span class="material-symbols-outlined refresh"  onClick={() => {
               
               signOut(auth).then(() => {
                  navigate("/kindergarten_sign")
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
    else{

      return (
        <>
        <Topcloud />

        <Profile />
        <div className="main appmain">
         <h2 style={{margin:"30vh 40vw 30vh 40vw", fontFamily:"'Fredoka One', cursive"}}>hellooo {user.displayName} ◘</h2>
         </div>
         <Botcloud />
        </>
    );
    }


    

    
}



export default PrHome;
