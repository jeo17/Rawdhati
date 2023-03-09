import "./app.css"
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import {useContext } from "react";
import ThemeContext from "./context/Theme";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import NeedToSignOut from "./needToSignOut";



function App() {
  const {bird,face2,body} = useContext(ThemeContext);

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
   {!user &&  
      <>
      <Topcloud />
      
      <div className="main appmain">
  
      
      <div className="parside ag-offer_item">
      <div className="pk" ><h1>Parents Space </h1> <img width={"45px"} src={require('./family3.png')} alt="sorry" /> </div>
      <div className="box-cont ag-offer_visible-item">

        <p>A space for parents to register their children and choose the appropriate kindergarten for them</p>

        
      </div>

      <div class="ag-offer_hidden-item">
      <div className="container">
          <Link to="/parent_sign" className={`button button--${bird}`}> 
            <div className="button__wrapper">
              <span className="button__text">Get started</span>
            </div>
            <div className="characterBox">
              <div className="character wakeup">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
              <div className="character wakeup">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
              <div className="character">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>



    <div className="kinside ag-offer_item">
      <div className="pk"> <h1>Kindergarten Space  </h1> <img width={"45px"} src={require('./kindergarten.png')} alt="sorry" /> </div>
      <div className="box-cont ag-offer_visible-item">

        <p>A space for kindergartens to register and introduce various activities and communicate with parents</p>
       
      </div>

      <div class="ag-offer_hidden-item">
      <div className="container">
          <Link to="/kindergarten_sign" className={`button button--${bird}`}>
            <div className="button__wrapper">
              <span className="button__text">Get started</span>
            </div>
            <div className="characterBox">
              <div className="character wakeup">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
              <div className="character wakeup">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
              <div className="character">
                <div className="character__face" />
                <div className={`${face2}`}></div>
                <div className={`${body}`}></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </div>
    
      </div>
      <Botcloud />
      </>
    }
     {user && 
       <NeedToSignOut/ >
  
      }
    </>

  );
}

export default App;