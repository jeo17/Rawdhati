import "./app.css"
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import {useContext } from "react";
import ThemeContext from "./context/Theme";


function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`} >
   
       <Topcloud/>
       <div className="main appmain">
        
      <div className="kenside">
          <div className="box-cont">
          <div className="pk" ><h1>Parents Space </h1> <img  width={"45px"}  src={require('./family3.png')} alt="sorry" /> </div> 
               <p>A space for parents to register their children and choose the appropriate kindergarten for them</p>
          </div>
    </div>
      <div className="parside">
        <div className="box-cont">
          <div className="pk"> <h1>Kendegarten Space  </h1> <img  width={"45px"}  src={require('./kindergarten.png')} alt="sorry" /> </div> 
           <p>A space for kindergartens to register and introduce various activities and communicate with parents</p>
        </div>
      </div>
        </div>        
      <Botcloud/>

    </div>
  );
}

export default App;
