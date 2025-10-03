import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function History({ panel }) {
  const [timeframe, setTimeframe] = useState("daily");

  // --- Labels for X-axis
  const timestamps = {
    daily: ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM"],
    weekly: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    monthly: ["Week 1", "Week 2", "Week 3", "Week 4"],
  };

  // --- Panel Data
  const panelData = {
    solar1: {
      daily: { solar: [0.5, 1.2, 1.8, 2.5, 2.0, 3.0], battery: [0.5, 0.6, 0.4, 0.7, 0.3, 0.5] },
      weekly: { solar: [10, 12, 14, 11, 13, 15, 16], battery: [7, 8, 9, 10, 8, 7, 9] },
      monthly: { solar: [40, 42, 45, 50], battery: [35, 37, 36, 38] },
    },
    solar2: {
      daily: { solar: [0.3, 1.0, 1.5, 2.0, 2.2, 2.5], battery: [0.4, 0.5, 0.6, 0.3, 0.2, 0.4] },
      weekly: { solar: [9, 10, 12, 11, 10, 12, 13], battery: [6, 7, 8, 6, 5, 7, 8] },
      monthly: { solar: [35, 37, 38, 42], battery: [30, 32, 31, 33] },
    },
    solar3: {
        daily: { solar: [0.3, 1.0, 1.5, 2.0, 2.2, 2.5], battery: [0.4, 0.5, 0.6, 0.3, 0.2, 0.4] },
        weekly: { solar: [9, 10, 12, 11, 10, 12, 13], battery: [6, 7, 8, 6, 5, 7, 8] },
        monthly: { solar: [35, 37, 38, 42], battery: [30, 32, 31, 33] },
      },
    overall: {
      daily: { solar: [0.6, 1.5, 2.0, 2.8, 2.5, 3.5], battery: [0.6, 0.7, 0.5, 0.8, 0.6, 0.9] },
      weekly: { solar: [15, 16, 18, 17, 19, 20, 22], battery: [12, 13, 14, 12, 15, 16, 17] },
      monthly: { solar: [55, 58, 60, 63], battery: [50, 52, 55, 57] },
    },
  };

  const solarDataset = {
    labels: timestamps[timeframe],
    datasets: [
      {
        label: "Solar Power (kW)",
        data: panelData[panel][timeframe].solar,
        borderColor: "rgba(0, 209, 178, 1)",
        backgroundColor: "rgba(0, 209, 178, 0.2)",
      },
      {
        label: "Battery Usage (kWh)",
        data: panelData[panel][timeframe].battery,
        borderColor: "rgba(255, 165, 0, 1)",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: `Power History - ${panel.toUpperCase()} (${timeframe})` },
    },
  };

  return (
    <div className="history">
      {/* Timeframe Buttons */}
      <div className="btn-group">
        {["daily", "weekly", "monthly"].map((t) => (
          <button
            key={t}
            className={`btn ${timeframe === t ? "active" : ""}`}
            onClick={() => setTimeframe(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Chart */}
      <Line data={solarDataset} options={options} />

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}</th>
              <th>Solar Power (kW)</th>
              <th>Battery Usage (kWh)</th>
            </tr>
          </thead>
          <tbody>
            {timestamps[timeframe].map((label, index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>{panelData[panel][timeframe].solar[index]}</td>
                <td>{panelData[panel][timeframe].battery[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
