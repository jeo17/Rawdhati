import React from 'react';
import "./Profile.css"
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Page404 from '../Page_404';


const Profile = ({children,id}) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
    return (
      <div>
        <p>Initialising User...</p>  
      </div>
    );
  }

  if (error) {
    return (
      <>
         <Page404 /> 
      </>
    );
  }

  if(user){
    return (
      <dialog id={id === undefined? "profile":id} className="toHide" onClick={(eo) => {
        if (eo.target.className==="toHide") {
          const profile = document.getElementById(id === undefined? "profile":`${id}`);
          profile.close();
        }
      }}>

       <div className="profile-card">
         <span className="material-symbols-outlined"     style={{float:"right" , color:"orange", position:"relative",bottom:"18px",left:"14px",fontWeight:"900",transform:"scale(1.2)",cursor:"pointer"}}
             onClick={() => {
          const profile = document.getElementById(id === undefined? "profile":`${id}`);
          profile.close();
          
       }} >close</span>
    
        {children}
    
       </div>
</dialog>

  );
  }

}

export default Profile;
