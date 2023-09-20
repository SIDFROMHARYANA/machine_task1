import React from "react";
import './plancard.css'; // Import the CSS file

const BasicPlanCard = ({ backgroundColor }) => {
  return (
    <div className="plan-card">
      
      <h2>Basic</h2>
      <div className="price">
        <span className="crossed-price">$89.99/mo</span> {/* Crossed-out price */}
        <span className="current-price">$9.99/mo</span> {/* Current price */}      
        <div/>
        <br></br>
        <logo style={{backgroundColor }}> Get Started<span className="right-arrow">➔</span> </logo> {/* Right arrow */}
        
 
        </div>
      <hr/>
      <p>What you'll get</p>
      <ul>
        <li> Upto 25 Users</li>
        <li>Upto 25 gb Storage</li>
        <li>Email Support</li>

      </ul>
      <button className="explore-button">EXPLORE FEATURES➔</button>
      <div/>
    </div>
  );
};

export default BasicPlanCard;