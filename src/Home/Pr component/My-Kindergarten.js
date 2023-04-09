import React from 'react';
import "./My-Kindergarten.css"
import Profile from '../../comp/Profile';

const MyKindergarten = ({MyKindergarten_info,MyKindergarten_activites}) => {
  console.log()
    return (
      <>
      <Profile id="My-kin-prof">

      <div className="top-container">
              <img
                src={require("../../comp/assets/avatar.jpg")}
                className="img-fluid profile-image"
                width={70}
                alt="sorry"
              />
            </div>
            <div className="bot-container" style={{ marginTop: "0" }}>
              <div style={{ marginLeft: "11px" }}>
  
                  <h5 className="name"> {MyKindergarten_info[0]}</h5>
              
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Address: </span>
                <span className="wishlist">
                  {
                    MyKindergarten_info[2]
                  }
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Activites: </span>
                <span className="wishlist">
                  {MyKindergarten_activites.map((item) => {
                    return (
                      <span style={{ marginLeft: "5px" }} key={item}>
                        {item},
                      </span>
                    );
                  })}
                </span>
              </div>

              <div className="recent-border mt-4">
                <span className="recent-orders">Price: </span>
                <span className="wishlist">
                  {
                    MyKindergarten_info[3]
                  }
                </span>
              </div>

            </div>
        
      </Profile>
      <h2 className="card-title">My Kindergarten</h2>
      <div className="MyKindergarten-container">
   <div className="MyKindergarten-wrapper"> 
    <div className="MyKindergarten-banner-image"> </div>
    <h1 className='purples'> {MyKindergarten_info[0]}</h1>
    <p>
      {MyKindergarten_info[1]}
    </p>
  </div>
  <div className="MyKindergarten-button-wrapper">
    <button className="MyKindergarten-btn MyKindergarten-outline">message us</button>
    <button className="MyKindergarten-btn MyKindergarten-fill" onClick={(eo) => {
      const profile = document.getElementById("My-kin-prof")
      profile.showModal()
    }}>details</button>
  </div>
</div>
      </>
      
      

    );
}

export default MyKindergarten;
