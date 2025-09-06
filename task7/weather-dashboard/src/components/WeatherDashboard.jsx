import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherDashboard.css";
const API_KEY = "d925b15a81629759a19d9b01da627ec2"; 

function WeatherDashboard() {
  const [city, setCity] = useState("Cairo");
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Weather
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeatherData(null);
        setForecast([]);
      } else {
        setWeatherData(data);

        // Forecast (3 أيام)
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastRes.json();

        const daily = forecastData.list.filter((_, idx) => idx % 8 === 0).slice(0, 3);
        setForecast(daily);
      }
    } catch (err) {
      setError("⚠️ Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // أول ما يفتح يعرض القاهرة
  useEffect(() => {
    fetchWeather(city);
  }, []);

  // Current Location
  const fetchCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await res.json();
          setWeatherData(data);

          const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const forecastData = await forecastRes.json();
          const daily = forecastData.list.filter((_, idx) => idx % 8 === 0).slice(0, 3);
          setForecast(daily);
        } catch {
          setError("⚠️ Failed to fetch location weather");
        } finally {
          setLoading(false);
        }
      },
      () => setError("❌ Location access denied")
    );
  };

  return (
    <div className="dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Search</button>
        <button onClick={fetchCurrentLocationWeather}>📍 My Location</button>
      </div>


      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-container">
          <WeatherCard data={weatherData} />

          <div className="forecast">
            <h3>3-Day Forecast</h3>
            <div className="forecast-grid">
              {forecast.map((day, idx) => (
                <WeatherCard key={idx} data={day} forecast />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;
