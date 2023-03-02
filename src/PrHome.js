import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import { Link } from 'react-router-dom';


const PrHome = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <>
        <Topcloud />
 
        <div className="main appmain">
         {user && 
         <h2 style={{margin:"30vh 44vw 30vh 44vw", fontFamily:"'Fredoka One', cursive"}}>hellooo user ♥</h2>
         }

         {!user &&
          <h2 style={{margin:"30vh 34vw 30vh 34vw", fontFamily:"'Fredoka One', cursive"}}>you have to <Link to="/parent_sign">sign in</Link> to continue ...🖤</h2>
         }
         </div>
         <Botcloud />
        </>
    );
}

export default PrHome;
