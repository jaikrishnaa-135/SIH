import React, { useState } from "react";
import StatCard from "./StatCard"; // make sure path is correct
import LineChart from "./LineChart";

export default function Storage({ panel }) {
   const [activePanel, setActivePanel] = useState("solar1");
  
    // --- Dummy Data for Demo ---
    const timestamps = [
      new Date().setHours(0,0,0),
      new Date().setHours(1,0,0),
      new Date().setHours(2,0,0),
      new Date().setHours(3,0,0),
      new Date().setHours(4,0,0),
    ];
  
    const panelData = {
      solar1: {
        solar: [0, 1.2, 2.5, 1.8, 3.0],
        battery: [0.5, 0.6, 0.4, 0.7, 0.3],
      },
      solar2: {
        solar: [0.3, 1.0, 2.0, 1.5, 2.5],
        battery: [0.4, 0.5, 0.6, 0.3, 0.2],
      },
      solar3: {
        solar: [0.1, 0.8, 1.5, 1.0, 2.0],
        battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      },
      Overall: {
        solar: [0.1, 0.8, 1.5, 1.0, 2.0],
        battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      },
    };
    const batteryDataset = [
      {
        label: "Battery Usage (kWh)",
        data: panelData[activePanel].battery,
        borderColor: "rgba(255, 165, 0, 1)",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
      },
    ];
  
  return (
    <div className="storage">
     

      <StatCard 
        title="Battery Stats" 
        fields={["Temperature (°C)", "Current (A)", "Voltage (V)"]} 
      />
        <LineChart
            title={`Battery Usage - ${activePanel.toUpperCase()}`}
            labels={timestamps}
            datasets={batteryDataset}
          />
    </div>
  );
}
