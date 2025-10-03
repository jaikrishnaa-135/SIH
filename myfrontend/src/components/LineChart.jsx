// components/LineChart.jsx
import React from "react";
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
  TimeScale,
} from "chart.js";
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export default function LineChart({ title, labels, datasets }) {
  const data = { labels, datasets };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: title },
    },
    scales: {
      x: {
        type: "time",
        time: { unit: "hour" },
        title: { display: true, text: "Time" },
      },
      y: {
        title: { display: true, text: title.includes("Battery") ? "kWh" : "kW" },
      },
    },
  };

  return <Line data={data} options={options} />;
}
