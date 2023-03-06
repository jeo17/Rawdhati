import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
  
     
    return (
        <>
        <Topcloud />
 
        <div className="main appmain">
         <h2 style={{margin:"30vh 40vw 30vh 40vw", fontFamily:"'Fredoka One', cursive"}}>hellooo {user.displayName} ♥</h2>
         </div>
         <Botcloud />
        </>
    );


    

    
}



export default PrHome;
