import React from 'react';
import "./Profile.css"
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    //if he is in the loading state do this block of code ... and when he done read the rest of the code.
    return (
      <div>
        <p>Initialising User...</p>  
      </div>
    );
  }

  if(user){
    return (
      <dialog id='profile'>


  <div className="card">
      <p style={{float:"right",border:"2px solid grey",borderRadius:"50%", width:"16px",height:"14.2px",color:"grey",textAlign:"center",cursor:"pointer",position:"relative",bottom:"28px",fontSize:"14px" }}
       onClick={() => {
          const profile = document.getElementById("profile");
          profile.close();
       }} >X</p>
    <div className="top-container">
      <img
        src={require("./assets/avatar.jpg")}
        className="img-fluid profile-image"
        width={70}
        alt="sorry"
      />
      <div style={{marginLeft:"11px"}}>
        <h5 className="name">{user.displayName=== null? "el rawda":`${user.displayName}`}</h5>
        <p className="mail">{user.email}</p>
      </div>
    </div>
   <div className='bot-container'>
   <div className="recent-border mt-4">
      <span className="recent-orders">Activits</span>
    </div>
    <div className="wishlist-border pt-2">
      <span className="wishlist">Wishlist</span>
    </div>
    <div className="fashion-studio-border pt-2">
      <span className="fashion-studio">Fashion studio</span>
    </div>
   </div>
    
  </div>
</dialog>

  );
  }

}

export default Profile;
