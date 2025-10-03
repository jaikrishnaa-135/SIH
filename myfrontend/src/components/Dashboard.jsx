// Dashboard.jsx
import React, { useState } from "react";
import StatCard from "./StatCard";
import WeatherCard from "./Weathercard";
import AlertsCard from "./AlertsCard";
import LineChart from "./LineChart";

export default function Dashboard() {
  const [activePanel, setActivePanel] = useState("solar1");

  // --- Dummy Data for Demo ---
  const timestamps = [
    new Date().setHours(0, 0, 0),
    new Date().setHours(1, 0, 0),
    new Date().setHours(2, 0, 0),
    new Date().setHours(3, 0, 0),
    new Date().setHours(4, 0, 0),
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
      solar: [0.5, 1.5, 3.0, 2.0, 4.0],
      battery: [0.3, 0.6, 0.5, 0.8, 0.4],
    },
  };

  // --- StatCards common structure ---
  const cards = [
    { title: "Solar Generation", fields: ["Voltage (V)", "Current (A)", "Power (kW)"] },
    { title: "Inverter Output", fields: ["Voltage (V)", "Current (A)", "Power (kW)"] },
    { title: "Consumption & Grid", fields: ["Consumed Power (kW)", "Supply to Grid (kW)"] },
  ];

  // --- Graph datasets ---
  const solarDataset = [
    {
      label: "Solar Power (kW)",
      data: panelData[activePanel].solar,
      borderColor: "rgba(0, 209, 178, 1)",
      backgroundColor: "rgba(0, 209, 178, 0.2)",
    },
  ];

  

  return (
    <section className="tab active">
      {/* --- Permanent Left Sidebar --- */}
      <div className="sidebar-left">
        <h2>Panels</h2>
        {["solar1", "solar2", "solar3", "Overall"].map((panel) => (
          <button
            key={panel}
            className={`tab-btn ${activePanel === panel ? "active" : ""}`}
            onClick={() => setActivePanel(panel)}
          >
            {panel.toUpperCase()}
          </button>
        ))}
      </div>

      {/* --- Main Grid Content --- */}
      <div className="grid">
        <div>
          {/* StatCards */}
          {cards.map((card, i) => (
            <StatCard key={i} title={card.title} fields={card.fields} />
          ))}

          {/* Solar Power Graph */}
          <LineChart
            title={`Solar Power Generation - ${activePanel.toUpperCase()}`}
            labels={timestamps}
            datasets={solarDataset}
          />

         
        </div>

        {/* Right Sidebar */}
        <aside>
          <WeatherCard />
          <AlertsCard />
        </aside>
      </div>
    </section>
  );
}
