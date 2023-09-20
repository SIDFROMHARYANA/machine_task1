
import React from "react";
import './plancard.css'; // Import the CSS file

const PremiumPlanCard = ({ backgroundColor }) => {
  return (
    <div className="plan-card">
      <h2>Premium</h2>
      <div className="price">
        <span className="crossed-price">$389.99/mo</span> {/* Crossed-out price */}
        <span className="current-price">$199.99/mo</span> {/* Current price */}      
        <div/>
      
        <logo style={{backgroundColor }}>Get Started <span className="right-arrow">➔</span> </logo> {/* Right arrow */}
      </div>
      <hr/>
      <p>What you'll get</p>
      <ul>
        <li> Upto 75 Users</li>
        <li>Upto 100gb Storage</li>
        <li>Email+Chat+WhatsApp Support</li>

      </ul>
      <button className="explore-button">EXPLORE FEATURES➔</button>
      <div/>
    </div>
  );
};

export default PremiumPlanCard;