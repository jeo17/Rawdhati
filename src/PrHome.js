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
        if (!user) {
            navigate("/Visitor");
        }
    })
     
    return (
        <>
        <Topcloud />
 
        <div className="main appmain">
         <h2 style={{margin:"30vh 44vw 30vh 44vw", fontFamily:"'Fredoka One', cursive"}}>hellooo user ♥</h2>
         </div>
         <Botcloud />
        </>
    );
}

export default PrHome;
