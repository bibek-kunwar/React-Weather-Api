import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'e1787e5c49f93a28f3c04740bb005910';
  const city = 'kathmandu';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${kathmandu}&appid=${e1787e5c49f93a28f3c04740bb005910}&units=metric`
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, []);

  let weatherImage;

  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    const icon = weatherData.weather[0].icon;

    if (icon.includes("01")) {
      weatherImage = "clear.png";
    } else if (icon.includes("02") || icon.includes("03")) {
      weatherImage = "clouds.png";
    } else if (icon.includes("04")) {
      weatherImage = "overcast.jpg";
    } else if (icon.includes("09") || icon.includes("10")) {
      weatherImage = "rain.png";
    } else if (icon.includes("11")) {
      weatherImage = "thunderstorm.jpg";
    } else if (icon.includes("13")) {
      weatherImage = "snow.png";
    } else if (icon.includes("50")) {
      weatherImage = "mist.jpg";
    } else {
      weatherImage = "default.jpg";
    }
  }

  return (
    <div className="card">
      <div className="search">
        <input type="text" placeholder="enter city" spellCheck="false" />
        <button> <img src="search.png" alt="Search Icon" /></button>
      </div>

      <div className="weather">
        <img src={weatherImage} className="weather-icon" alt="Weather Icon" />
        <h1 className="temp">{ }</h1>
        <h2 className="city">{city}</h2>
        <div className="details">
          <div className="col">
            <img src="humidity.png" alt="Humidity Icon" />
            <div>
              <p className="humidity">50%</p>
              <p>humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="wind.png" alt="Wind Icon" />
            <div>
              <p className="humidity">120km/hr</p>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
