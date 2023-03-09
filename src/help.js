import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import Profile from './comp/Profile';
import "./app.css"


const Help = () => {
    
    return (
        <>
             <Topcloud/>
             <div className='main'>
               <Profile/>
             </div>
             <Botcloud/>
        </>
    );
}

export default Help;
