import React from "react";
import './sidebar.css';

const Sidebar = ({backgroundColor}) => {
  return (
       <div className="sidebar">
    
    <div className="profile-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Ram_Mohan.jpg" // Replace with the actual image URL
          alt="Boy"
          className="profile-photo"
        />
        <div className="profile-details">
          <div className="profile-name"> Ram Mohan</div>
          <div className="profile-email"> rammohanmohan2@gmail.com</div>
        </div>
      
      </div>
      
      <div className="buttons">
      <button style={{backgroundColor : "lightblue" }}>Dashboard</button>
      <br></br>
      <button style={{backgroundColor:"whitesmoke" }}>Perks</button>
      <br></br>
      <button style={{backgroundColor:"whitesmoke" }}>Addons</button>
      <br></br>
      <button style={{backgroundColor:"whitesmoke" }}>FAQ</button>
      <br></br>
      <button style={{backgroundColor:"whitesmoke" }}>Support</button>
      <br></br>
      <button style={{backgroundColor:"lightblue" }}>Logout</button>
      </div>

    </div>
  );
};

export default Sidebar;
