import React from 'react';
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import "./app.css"
import {useContext } from "react";
import ThemeContext from "./context/Theme";

const Help = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`App ${theme}`}>
             <Topcloud/>
             <div className='main'>
             </div>
             <Botcloud/>
        </div>
    );
}

export default Help;
