import React from "react";
import StatCard from "./StatCard";
import WeatherCard from "./Weathercard";
import AlertsCard from "./AlertsCard";


export default function Dashboard() {
  return (
    <section className="tab active">
      <div className="grid">
        <div>
          <StatCard title="Solar Generation" fields={["Voltage (V)", "Current (A)", "Power (kW)"]} />
          <StatCard title="Inverter Output" fields={["Voltage (V)", "Current (A)", "Power (kW)"]} />
          <StatCard title="Battery" fields={["Voltage (V)", "Current (A)", "SOC (%)"]} />
          <StatCard title="Consumption & Grid" fields={["Consumed Power (kW)", "Supply to Grid (kW)"]} />
        </div>

        <aside>
          <WeatherCard />
          <AlertsCard />
        </aside>
      </div>
    </section>
  );
}
