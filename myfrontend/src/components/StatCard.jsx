import React from "react";

export default function StatCard({ title, fields, values }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="stat-group">
        {fields.map((field, i) => (
          <div className="stat" key={i}>
            <small>{field}</small>
            <div className="big">{values && values[i] !== undefined ? values[i] : 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
