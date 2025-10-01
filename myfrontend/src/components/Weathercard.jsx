import React, { useEffect, useState } from "react";

const API_KEY = "YOUR_OPENWEATHER_KEY";

export default function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("mg_city") || "Delhi");

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (res.ok) setWeather(data);
    } catch (err) {
      console.error("Weather fetch failed", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="card">
      <h3>Weather</h3>
      {weather ? (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather"
            width="48"
          />
          <div>
            <strong>{weather.name}</strong>
            <br />
            {weather.main.temp.toFixed(1)}°C, {weather.weather[0].description}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div style={{ marginTop: "12px" }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => { localStorage.setItem("mg_city", city); fetchWeather(); }}>
          Update
        </button>
      </div>
    </div>
  );
}
