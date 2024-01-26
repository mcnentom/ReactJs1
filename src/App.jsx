import React, { useEffect, useState } from 'react';
import './App.css';

function Weather() {
  const [city, setCity] = useState('Nyeri');
  const [weatherData, setWeatherData] = useState(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const myApi = process.env.myapi;
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${myApi}`
      );
      const data = await response.json();
      setWeatherData(data);
      setFetched(true);
    }
    if (!fetched) {
      fetchData();
    }
  }, [city, fetched]);

  const handleSearch = () => {
    setFetched(false);
  };

  if (weatherData === null) {
    return <div className="loading">Loading...</div>;
  }

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const today = new Date().getDay();

  const dailyForecasts = weatherData.list.filter((item, index, self) => {
    const currentDay = new Date(item.dt * 1000).getDate();
    const nextDay = new Date(self[index + 1] ? self[index + 1].dt * 1000 : null).getDate();
    return currentDay !== nextDay;
  });

  const todayForecast = dailyForecasts.slice(0, 1);
  const futureForecasts = dailyForecasts.slice(1);

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather in {weatherData.city.name}</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      
        <div className='forecast'>
          <div className="forecast-container">
            {todayForecast.map((item, index) => (
              <div key={item.dt} className="forecast-card1">
                <div>
                <p className="forecast-day">Today</p>
                <p className="forecast-temp"> {parseFloat(item.main.temp - 273.15).toFixed(2)} °C</p>
                <p className="forecast-description"> {item.weather[0].main}</p>
                </div>
                <div className='image'>
                  <img src={`./${item.weather[0].icon}.svg`} alt="icon" className="forecast-icon" />
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="forecast-container">
            {futureForecasts.map((item, index) => (
              <div key={item.dt} className="forecast-card">
                <p className="forecast-day">{dayNames[new Date(item.dt * 1000).getDay()]}</p>
                <img src={`./${item.weather[0].icon}.svg`} alt="icon" className="forecast-icon1" />
                <p className="forecast-temp"> {parseFloat(item.main.temp - 273.15).toFixed(2)} °C</p>
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
}

export default Weather;
