
import React from "react";
import './plancard.css'; // Import the CSS file

const EnterprisePlanCard = ({ backgroundColor }) => {
  return (
    <div className="plan-card">
        <button style={{backgroundColor }}>Let's Connect</button>
     
     <h2>Enterprise Plan</h2>
      <p> Effortlessly customize and finetune services as your needs shift , ensuring perfect tools for success</p>
      <p>What you'll get</p>
      <ul>
        <li> More than 75 Users</li>
        <li> Customization of all other features</li>
        </ul>
        <logo style={{backgroundColor }}> Contact Us <span className="right-arrow">➔</span> </logo> {/* Right arrow */}
    </div>
  );
};

export default EnterprisePlanCard;