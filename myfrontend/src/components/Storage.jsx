import React, { useState } from "react";
import StatCard from "./StatCard"; // make sure path is correct
import LineChart from "./LineChart";

export default function Storage({ panel }) {
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
      percentage: ["Battery "], // battery % example
    },
    solar2: {
      solar: [0.3, 1.0, 2.0, 1.5, 2.5],
      battery: [0.4, 0.5, 0.6, 0.3, 0.2],
      percentage: [],
    },
    solar3: {
      solar: [0.1, 0.8, 1.5, 1.0, 2.0],
      battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      percentage: [60, 58, 55, 53, 50],
    },
    Overall: {
      solar: [0.1, 0.8, 1.5, 1.0, 2.0],
      battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      percentage: [75, 72, 70, 68, 65],
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

  // Determine background color based on battery %
  const batteryAvg =
    panelData[activePanel].percentage.reduce((a, b) => a + b, 0) /
    panelData[activePanel].percentage.length;
  const batteryBgColor = batteryAvg < 30 ? "#ff6b6b" : "#22c55e"; // red if avg < 30%, else green

  return (
    <div className="storage">
      {/* --- Battery Stats --- */}
      <StatCard
        title="Battery Stats"
        fields={["Temperature (°C)", "Current (A)", "Voltage (V)"]}
      />

      {/* --- Battery Percentage --- */}
      <StatCard
        title="Battery Percentage"
        fields={panelData[activePanel].percentage.map((p) => `${p}%`)}
        style={{ backgroundColor: batteryBgColor, color: "#fff" }}
      />

      {/* --- Battery Usage Chart --- */}
      <LineChart
        title={`Battery Usage - ${activePanel.toUpperCase()}`}
        labels={timestamps}
        datasets={batteryDataset}
      />
    </div>
  );
}
