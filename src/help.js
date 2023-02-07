import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import "./app.css"

const Help = () => {
    return (
        <div className='App'>
             <Topcloud/>
             <div className='main'></div>
             <Botcloud/>
        </div>
    );
}

export default Help;
