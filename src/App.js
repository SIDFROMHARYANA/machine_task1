import React,{useState} from "react";
import './App.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import BasicPlanCard from "./components/plancard/basicplancard";
import StandardPlanCard from "./components/plancard/standardplancard";
import PremiumPlanCard from "./components/plancard/premiumplancard";
import FreeStarterPlanCard from "./components/plancard/freestarter";
import EnterprisePlanCard from "./components/plancard/enterpriseplan";
import VerticalScrollNavigation from "./components/verticalscrollnavigation";


const App = () => {

    const [selectedFrequency, setSelectedFrequency] = useState("monthly");
  
    const handleFrequencyChange = (frequency) => {
      setSelectedFrequency(frequency);
    };
 
    return (
      <>
    <div className="app">
      <Header />
      
      <h2> Choose a plan that's just right for you !</h2>
      
      <div className="frequency-buttons">
        <button
          className={`frequency-button ${
            selectedFrequency === "monthly" ? "active" : ""
          }`}
          onClick={() => handleFrequencyChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`frequency-button ${
            selectedFrequency === "anually" ? "active" : ""
          }`}
          onClick={() => handleFrequencyChange("anually")}
        >
          Anually
        </button>    
        </div>
    </div>

      
      <div className="main-content">
        <Sidebar />
        
        <div className="plan-card-container">

          {/* Display PlanCard components horizontally */}
          <BasicPlanCard backgroundColor="#f2c5a7" /> {/* Skin color */}
          <StandardPlanCard backgroundColor="#ff9cc2" /> {/* Pink color */}
          <PremiumPlanCard backgroundColor="#e2d5e3" /> {/* Light violet color */}
          <FreeStarterPlanCard backgroundColor="#a8d8a5" /> {/* Green color */} 
          <EnterprisePlanCard backgroundColor="#d5c0e1" /> {/* Violet color */}

         
          <h5>*some unique features are added as an add-ons with individual plans for each features</h5>
          {/* <PlanCard planName="Standard" price="$99.99" logo="Get started" />
          <PlanCard planName="Premium" price="$199.99" logo="Get started" />
          <PlanCard planName="Free Starter" logo="Get started" />
          <PlanCard planName="Enterprise Plan"  logo="Contact Us" /> */}
          
          </div> 
        </div>
        <VerticalScrollNavigation />
        </>
  );
};

export default App;







