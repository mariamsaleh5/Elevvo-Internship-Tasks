import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "gray", textAlign: "center" }}>🌤 Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
