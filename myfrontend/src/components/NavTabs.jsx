import React from "react";

export default function NavTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <nav>
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
          onClick={() => setActiveTab(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
