// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/Dashboard";
import Storage from "./components/Storage";
import ChatBot from "./ChatBot";
import Alerts from "./components/Alerts";
import History from "./components/History";
import Login from "./components/Login"; 
import Help from "./components/Help";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activePanel, setActivePanel] = useState("solar1");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  if (!loggedIn) return <Login onLogin={handleLogin} />;

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="nav-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Panels
      </button>

      {/* Sidebar */}
      <div className={`sidebar-left ${sidebarOpen ? "active" : ""}`}>
        <h2>Panels</h2>
        {["solar1", "solar2", "solar3", "overall"].map((panel) => (
          <button
            key={panel}
            className={activePanel === panel ? "tab-btn active" : "tab-btn"}
            onClick={() => {
              setActivePanel(panel);
              setSidebarOpen(false); 
            }}
          >
            {panel.replace("solar", "Solar").toUpperCase()}
          </button>
        ))}

        {/* Extra Options */}
        <div style={{ marginTop: "auto", padding: "10px" }}>
          {/* Help */}
          <button
            className={`tab-btn ${activeTab === "help" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("help");
              setSidebarOpen(false);
            }}
            style={{
              background: "#007bff",
              color: "white",
              width: "100%",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          >
            Help
          </button>

          {/* Logout */}
          <button
            className="tab-btn logout-btn"
            onClick={handleLogout}
            style={{
              background: "red",
              color: "white",
              width: "100%",
              borderRadius: "6px",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Overlay (click outside to close) */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main App Content */}
      <div className={`wrap ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Header />
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="main-content">
          {activeTab === "dashboard" && <Dashboard panel={activePanel} />}
          {activeTab === "storage" && <Storage panel={activePanel} />}
          {activeTab === "alerts" && <Alerts />}
          {activeTab === "history" && <History panel={activePanel} />}
          {activeTab === "help" && <Help />}
        </div>

        <ChatBot />
        <footer>Renewable Energy Monitor</footer>
      </div>
    </>
  );
}

export default App;
