import { useState } from "react";

function Alerts() {
  const [alerts] = useState([
    { msg: "Battery low: SOC below 20%", type: "warning" },
    { msg: "Grid supply unstable", type: "error" },
  ]);

  // Sensor alerts per panel
  const [sensorAlerts] = useState({
    solar1: [
      { name: "Sensor 1", status: "error", msg: "Temperature high" },
      { name: "Sensor 2", status: "ok", msg: "Working normally" },
    ],
    solar2: [
      { name: "Sensor 1", status: "ok", msg: "All good" },
      { name: "Sensor 2", status: "ok", msg: "All good" },
    ],
    solar3: [
      { name: "Sensor 1", status: "error", msg: "Low efficiency" },
      { name: "Sensor 2", status: "ok", msg: "Working normally" },
    ],
    Overall: [
      { name: "Sensor 1", status: "ok", msg: "All good" },
      { name: "Sensor 2", status: "ok", msg: "All good" },
    ],
  });

  return (
    <>
      {/* General Alerts */}
      <div className="cardd">
        <h3>Alerts</h3>
        {alerts.length === 0 ? (
          <p style={{ color: "green" }}>No active alerts.</p>
        ) : (
          <ul>
            {alerts.map((a, i) => (
              <li
                key={i}
                style={{ color: a.type === "error" ? "red" : "orange" }}
              >
                {a.msg}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sensor Alerts per Panel */}
      {Object.keys(sensorAlerts).map((panel) => (
        <div key={panel} style={{ marginBottom: "20px" }}>
          <h3>{panel.toUpperCase()} Sensor Status</h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {sensorAlerts[panel].map((sensor, i) => (
              <div
                key={i}
                className="cardd"
                style={{
                  backgroundColor: sensor.status === "error" ? "#ff6b6b" : "#22c55e",
                  color: "#fff",
                  minWidth: "150px",
                }}
              >
                <h4>{sensor.name}</h4>
                <p>{sensor.msg}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Alerts;
