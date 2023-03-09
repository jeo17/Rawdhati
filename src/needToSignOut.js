import React from 'react';
import Topcloud from './comp/topcloud';
import Botcloud from './comp/botcloud';
import { Link } from 'react-router-dom';
import { auth } from './firebase/config';
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const NeedToSignOut = () => {
    const navigate = useNavigate();


    return (
        <>
        <Topcloud />
      
      <div className="main appmain">
        <h2 style={{fontFamily:"'Fredoka One', cursive", margin:"30vh 33vw"}}> you need to <Link to="/" onClick={() => {
                      signOut(auth).then(() => {
                        navigate("/")
                            }).catch((error) => {
                        // An error happened.
                       });
                
                     }}>sign out</Link> to continue ...♪♪</h2>
      </div>
       <Botcloud />
            
        </>
    );
}

export default NeedToSignOut;
