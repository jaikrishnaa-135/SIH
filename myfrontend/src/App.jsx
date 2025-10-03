// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/Dashboard";
import Storage from "./components/Storage";
import ChatBot from "./ChatBot";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activePanel, setActivePanel] = useState("solar1");

  return (
    <div className="wrap">
      <Header />
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="sidebar-left">
        <h2>Panels</h2>
        {["solar1", "solar2", "solar3", "overall"].map((panel) => (
          <button
            key={panel}
            className={activePanel === panel ? "tab-btn active" : "tab-btn"}
            onClick={() => setActivePanel(panel)}
          >
            {panel.replace("solar", "Solar").toUpperCase()}
          </button>
        ))}
      </div>

      <div className="main-content">
        {activeTab === "dashboard" && <Dashboard panel={activePanel} />}
        {activeTab === "storage" && <Storage panel={activePanel} />}
      </div>

      <ChatBot />
      <footer>Renewable Energy Monitor</footer>
    </div>
  );
}

export default App; // ✅ Must have default export
