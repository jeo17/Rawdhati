import React from 'react';
import "./My-Kindergarten.css"

const MyKindergarten = () => {
    return (
        <div className="MyKindergarten-container">
  <div className="MyKindergarten-wrapper">
    <div className="banner-image"> </div>
    <h1> Toyota Supra</h1>
    <p>
      Lorem ipsum dolor sit amet, <br />
      consectetur adipiscing elit.
    </p>
  </div>
  <div className="MyKindergarten-button-wrapper">
    <button className="MyKindergarten-btn MyKindergarten-outline">DETAILS</button>
    <button className="MyKindergarten-btn MyKindergarten-fill">BUY NOW</button>
  </div>
</div>

    );
}

export default MyKindergarten;
