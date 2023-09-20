
import React from "react";
import './plancard.css'; // Import the CSS file

const StandardPlanCard = ({ backgroundColor }) => {
  return (
    <div className="plan-card">
      <h2>Standard</h2>
      <div className="price">
        <span className="crossed-price">$189.99/mo</span> {/* Crossed-out price */}
        <span className="current-price">$99.99/mo</span> {/* Current price */}      
        
      
        <logo style={{backgroundColor }}> Get Started<span className="right-arrow">➔</span> </logo> {/* Right arrow */}
      </div>
      <hr/>
      <p>What you'll get</p>
      <ul>
        <li> Upto 50 Users</li>
        <li>Upto 50gb Storage</li>
        <li>Email+Chat Support</li>

      </ul>
      <button className="explore-button">EXPLORE FEATURES➔</button>
      <div/>
    </div>
  );
};

export default StandardPlanCard;