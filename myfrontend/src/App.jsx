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
  const [sidebarOpen, setSidebarOpen] = useState(false); // toggle for mobile

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="nav-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Panels
      </button>

      <div className={`sidebar-left ${sidebarOpen ? "active" : ""}`}>
        <h2>Panels</h2>
        {["solar1", "solar2", "solar3", "overall"].map((panel) => (
          <button
            key={panel}
            className={activePanel === panel ? "tab-btn active" : "tab-btn"}
            onClick={() => {
              setActivePanel(panel);
              setSidebarOpen(false); // close sidebar on mobile when selecting
            }}
          >
            {panel.replace("solar", "Solar").toUpperCase()}
          </button>
        ))}
      </div>

      <div className={`wrap ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Header />
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="main-content">
          {activeTab === "dashboard" && <Dashboard panel={activePanel} />}
          {activeTab === "storage" && <Storage panel={activePanel} />}
        </div>

        <ChatBot />
        <footer>Renewable Energy Monitor</footer>
      </div>
    </>
  );
}

export default App;
