import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
   
    return (
        <>
        <Topcloud />
 
        <div className="main appmain">
         <h2 style={{margin:"30vh 40vw 30vh 40vw", fontFamily:"'Fredoka One', cursive"}}>rawdat: │ {user.displayName} │</h2>
         </div>
         <Botcloud />
        </>
    );

    
}



export default KinHome;
