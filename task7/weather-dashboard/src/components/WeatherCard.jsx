import React from "react";
import "./WeatherCard.css";
function WeatherCard({ data, forecast }) {
  return (
    <div className="weather-card">
      <h2>{forecast ? data.dt_txt.split(" ")[0] : data.name}</h2>
      <p className="temp">{Math.round(data.main.temp)}°C</p>
      <p className="desc">{data.weather[0].description}</p>
      {!forecast && (
        <>
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>💨 Wind: {data.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
