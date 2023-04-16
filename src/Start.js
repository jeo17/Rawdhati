import "./app.css"
import Topcloud from "./comp/topcloud";
import Botcloud from "./comp/botcloud";
import {useContext } from "react";
import ThemeContext from "./context/Theme";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import NeedToSignOut from "./needToSignOut";
import { useTranslation } from 'react-i18next';



function App() {
  const {bird,face2,body} = useContext(ThemeContext);

  const [user] = useAuthState(auth);

  const { t, i18n } = useTranslation();

  return (
    <>
   {!user &&  
      <>
      <Topcloud />
      
      <div className="main appmain">
  
      
      <div className="parside ag-offer_item">
      <div className="pk" ><h1>{i18n.language === "en" && "Parents Space"}{i18n.language === "ar" && "مساحة الآباء"}{i18n.language === "fr" && "Espace Parents"} </h1> <img width={"45px"} src={require('./family3.png')} alt="sorry" /> </div>
      <div className="box-cont ag-offer_visible-item" dir="auto">
 
 {i18n.language === "en"  &&  <p>A space for parents to register their children and choose the appropriate kindergarten for them</p>}
 {i18n.language === "ar"  &&  <p>مساحة لأولياء الأمور لتسجيل أطفالهم واختيار الروضة المناسبة لهم</p>}
 {i18n.language === "fr"  &&  <p>Un espace permettant aux parents d'inscrire leurs enfants et de choisir le jardin d'enfants qui leur convient</p>}
        
      </div>

      <div className="ag-offer_hidden-item">
      <div className="container">
          <Link to="/parent_sign" className={`button button--${bird}`}> 
            <div className="button__wrapper">
              <span style={{fontFamily:i18n.language ==="ar"? "'Noto Sans Arabic', sans-serif":null}} className="button__text">{i18n.language === "en" && "Get started"}{i18n.language === "ar" &&" البدء"}{i18n.language === "fr" && "Commencer"}</span>
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
      <div className="pk"> <h1>{i18n.language === "en" && "Kindergarten Space"}{i18n.language === "ar" && "مساحة رياض الأطفال"}{i18n.language === "fr" && "Espace Maternelle"}  </h1> <img width={"45px"} src={require('./kindergarten.png')} alt="sorry" /> </div>
      <div className="box-cont ag-offer_visible-item" dir="auto">

      {i18n.language === "en"  &&  <p>A space for kindergarteners to register and introduce various activities and communicate with parents</p>}
      {i18n.language === "ar"  &&  <p>مساحة لرياض الأطفال للتسجيل والتعريف بالأنشطة المختلفة والتواصل مع أولياء الأمور</p>}
      {i18n.language === "fr"  &&  <p>Un espace pour les maternelles pour s'inscrire et présenter diverses activités et communiquer avec les parents</p>}
       
      </div>

      <div className="ag-offer_hidden-item">
      <div className="container">
          <Link to="/kindergarten_sign" className={`button button--${bird}`}>
            <div className="button__wrapper">
              <span className="button__text">{i18n.language === "en" && "Get started"}{i18n.language === "ar" &&" البدء"}{i18n.language === "fr" && "Commencer"}</span>
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