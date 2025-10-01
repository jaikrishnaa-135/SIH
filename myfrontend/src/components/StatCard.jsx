import React from "react";

export default function StatCard({ title, fields }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="stat-group">
        {fields.map((field, i) => (
          <div className="stat" key={i}>
            <small>{field}</small>
            <div className="big">0</div>
          </div>
        ))}
      </div>
    </div>
  );
}
