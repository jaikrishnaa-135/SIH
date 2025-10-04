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
      battery: [0.5, 0.6, 0.4, 0.7, 0.3],
      percentage: [80, 78, 75, 72, 70],
      stats: [32, 4.5, 230], // Temp °C, Current A, Voltage V
    },
    solar2: {
      battery: [0.4, 0.5, 0.6, 0.3, 0.2],
      percentage: [68, 65, 63, 60, 58],
      stats: [31, 4.2, 228],
    },
    solar3: {
      battery: [0.2, 0.3, 0.2, 0.4, 0.3],
      percentage: [60, 58, 55, 53, 50],
      stats: [33, 4.7, 232],
    },
    Overall: {
      battery: [0.3, 0.6, 0.5, 0.8, 0.4],
      percentage: [75, 72, 70, 68, 65],
      stats: [32, 4.4, 231],
    },
  };

  // --- Chart dataset ---
  const batteryDataset = [
    {
      label: "Battery Usage (kWh)",
      data: panelData[activePanel].battery,
      borderColor: "rgba(255, 165, 0, 1)",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
    },
  ];

  // --- Battery % avg for color ---
  const batteryAvg =
    panelData[activePanel].percentage.reduce((a, b) => a + b, 0) /
    panelData[activePanel].percentage.length;
  const batteryBgColor = batteryAvg < 30 ? "#ff6b6b" : "#22c55e";

  return (
    <div className="storage">
      {/* --- Battery Stats --- */}
      <StatCard
        title="Battery Stats"
        fields={["Temperature (°C)", "Current (A)", "Voltage (V)"]}
        values={panelData[activePanel].stats}
      />

      {/* --- Battery Percentage --- */}
      <StatCard
        title="Battery Percentage"
        fields={["Current Level"]}
        values={[`${batteryAvg.toFixed(1)}%`]}
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
