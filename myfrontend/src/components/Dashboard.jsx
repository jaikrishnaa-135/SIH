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
      stats: {
        solar: [230, 5.2, 1.2],          // Voltage, Current, Power
        inverter: [220, 4.8, 1.1],
        grid: [0.9, 0.3],
        temperature: [32]
      }
    },
    solar2: {
      solar: [0.3, 1.0, 2.0, 1.5, 2.5],
      battery: [0.4, 0.5, 0.6, 0.3, 0.2],
      stats: {
        solar: [228, 4.9, 1.1],
        inverter: [221, 4.6, 1.0],
        grid: [0.8, 0.2],
        temperature: [31]
      }
    },
    solar3: {
      solar: [0.1, 0.8, 1.5, 1.0, 2.0],
      battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      stats: {
        solar: [229, 5.0, 1.0],
        inverter: [223, 4.7, 0.9],
        grid: [0.7, 0.1],
        temperature: [30]
      }
    },
    Overall: {
      solar: [0.5, 1.5, 3.0, 2.0, 4.0],
      battery: [0.3, 0.6, 0.5, 0.8, 0.4],
      stats: {
        solar: [231, 5.3, 1.3],
        inverter: [225, 5.0, 1.2],
        grid: [1.0, 0.5],
        temperature: [33]
      }
    },
  };

  // --- StatCards with mapped values ---
  const cards = [
    { title: "Solar Generation", fields: ["Voltage (V)", "Current (A)", "Power (kW)"], values: panelData[activePanel].stats.solar },
    { title: "Inverter Output", fields: ["Voltage (V)", "Current (A)", "Power (kW)"], values: panelData[activePanel].stats.inverter },
    { title: "Consumption & Grid", fields: ["Consumed Power (kW)", "Supply to Grid (kW)"], values: panelData[activePanel].stats.grid },
    { title: "Temperature", fields: ["Celsius"], values: panelData[activePanel].stats.temperature },
  ];

  // --- Graph stays SAME ---
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
      {/* --- Left Sidebar --- */}
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
          {/* StatCards with values */}
          {cards.map((card, i) => (
            <StatCard key={i} title={card.title} fields={card.fields} values={card.values} />
          ))}

          {/* Solar Power Graph (unchanged) */}
          <div className="carddd">
            <LineChart
              title={`Solar Power Generation - ${activePanel.toUpperCase()}`}
              labels={timestamps}
              datasets={solarDataset}
            />
          </div>
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
