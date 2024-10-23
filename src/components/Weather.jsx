import { useEffect, useState } from "react";
import { useRef } from "react";

import "../css/Weather.css";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import { allicons } from "./AllIcons";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    if (city == "") {
      alert("Enter City Name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);

      const icon = allicons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        weather: data.weather[0].description,
      });
    } catch (error) {
      setWeatherData(false);
      console.log("Error", error);
    }
  };

  useEffect(() => {
    search("Bogotá");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt="image of search"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img
            className="weather-icon"
            src={weatherData.icon}
            alt="Weather Icon"
          />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Weather Icon" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <span className="divider" />
              <div>
                <p>{weatherData.weather}</p>
              </div>
              <span className="divider" />
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="not-found">
            <div className="stars" />
            <div className="moon" />
            <p>Sorry, City not Found</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
