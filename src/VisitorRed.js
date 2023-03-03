import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import { Link } from 'react-router-dom';

const VisitorRed = () => {
    return (
        <>
         <Topcloud />
         <div className="main appmain">
         <h2 style={{margin:"30vh 34vw 30vh 34vw", fontFamily:"'Fredoka One', cursive"}}>you have to <Link to="/parent_sign">sign in</Link> to continue ...🖤</h2>
         </div>

         <Botcloud/> 
        </>
    );
}

export default VisitorRed;
