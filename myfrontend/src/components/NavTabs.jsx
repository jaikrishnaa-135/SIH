import React from "react";

export default function NavTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "storage", label: "Storage" },
    { id: "alerts", label: "Alerts" },       // ✅ Added
    { id: "history", label: "History" },     // ✅ Added
  ];

  return (
    <nav>
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
          onClick={() => setActiveTab(t.id)}
          aria-label={`Go to ${t.label} tab`}
          title={t.label}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
