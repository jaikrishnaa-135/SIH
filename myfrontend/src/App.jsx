import React, { useState } from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="wrap">
      <Header />
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "settings" && <Settings />}


      <footer>Renewable Energy Monitor</footer>
    </div>
  );
}

export default App;
