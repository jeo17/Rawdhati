import "./app.css"
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";



function App() {

  return (
    <>
   
       <Topcloud/>
       <div className="main appmain">
        
      <div className="kenside">
          <div className="box-cont">
          <div className="pk" ><h1>Parents Space </h1> <img  width={"45px"}  src={require('./family3.png')} alt="sorry" /> </div> 
               <p>A space for parents to register their children and choose the appropriate kindergarten for them</p>
          
               <div className="container disbutton">
               <a href="#" className="button button--piyo">
                 <div className="button__wrapper">
                   <span className="button__text">Get started</span>
                 </div>
                 <div className="characterBox">
                   <div className="character wakeup">
                     <div className="character__face" />
                   </div>
                   <div className="character wakeup">
                     <div className="character__face" />
                   </div>
                   <div className="character">
                     <div className="character__face" />
                   </div>
                 </div>
               </a>
              </div>
          
          
          
          </div>
    </div>
      <div className="parside">
        <div className="box-cont">
          <div className="pk"> <h1>Kendegarten Space  </h1> <img  width={"45px"}  src={require('./kindergarten.png')} alt="sorry" /> </div> 
           <p>A space for kindergartens to register and introduce various activities and communicate with parents</p>
        

           <div className="container disbutton">
               <a href="#" className="button button--piyo">
                 <div className="button__wrapper">
                   <span className="button__text">Get started</span>
                 </div>
                 <div className="characterBox">
                   <div className="character wakeup">
                     <div className="character__face" />
                   </div>
                   <div className="character wakeup">
                     <div className="character__face" />
                   </div>
                   <div className="character">
                     <div className="character__face" />
                   </div>
                 </div>
               </a>
              </div>



        </div>
      </div>
        </div>        
      <Botcloud/>
         
    </>
    
  );
}

export default App;