import React from "react";
import "./VerticalScrollNavigation.css"; // Import CSS for styling

const VerticalScrollNavigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vertical-scroll-navigation">
      <div className="notification-bell">
        <i className="fas fa-bell"></i>
      </div>
      <div className="scroll-button" onClick={handleScrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default VerticalScrollNavigation;
