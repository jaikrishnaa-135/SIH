import React, { useState } from "react";

export default function AlertsCard() {
  const [alerts] = useState([
    { msg: "Battery low: SOC below 20%", type: "warning" },
    { msg: "Grid supply unstable", type: "error" },
  ]);

  return (
    <div className="card">
      <h3>Alerts</h3>
      {alerts.length === 0 ? (
        <p>No active alerts.</p>
      ) : (
        <ul>
          {alerts.map((a, i) => (
            <li key={i} className={a.type}>{a.msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
