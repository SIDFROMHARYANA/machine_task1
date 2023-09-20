
import React from "react";
import './plancard.css'; // Import the CSS file

const FreeStarterPlanCard = ({ backgroundColor }) => {
  return (
    <div className="plan-card">
        <button style={{backgroundColor }}>Free Forever</button>
      <h2>Free Starter</h2>
      <p>The quickest and easiest way to try Protocols with basic functionalities</p>
      <p>What you'll get </p>
      <ul>
        <li> Upto 75 Users</li>
        <li>Upto 100gb Storage</li>
        <li>Email+Chat+WhatsApp Support</li>
        <li>Basics of Documentation ,Task Flow,Voting, Accounting, Banking, Notes, Investor, Director and Team Management Included</li>
        </ul>
        <logo style={{backgroundColor }}> Get Started <span className="right-arrow">➔</span> </logo> {/* Right arrow */}
    </div>
  );
};

export default FreeStarterPlanCard;