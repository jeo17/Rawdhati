import React from 'react';
import Botcloud from "./comp/botcloud";
import { Link } from 'react-router-dom';
import TopcloudErr from './comp/topcloud_err';

const VisitorRed = () => {
    return (
        <>
         <TopcloudErr />
         <div className="main appmain">
         <h2 style={{margin:"30vh 34vw 30vh 34vw", fontFamily:"'Fredoka One', cursive"}}>you have to <Link to="/">sign in</Link> to continue ...🖤</h2>
         </div>

         <Botcloud/> 
        </>
    );
}

export default VisitorRed;
