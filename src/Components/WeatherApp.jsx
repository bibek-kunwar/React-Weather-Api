import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WeatherApp = () => {
  const [data, setData] = useState({
    celcius: 298,
    name: "Kathmandu",
    humidity: 10,
    speed: 2,
    imagePath: "mist.png"
  });

  const [name, setName] = useState('');


  const handleClick = () => {
    if (name !== '') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e1787e5c49f93a28f3c04740bb005910`;

      axios.get(url)
        .then(res => {
          let imagePath = '';

          if (res.data.weather[0].main === "Clouds") {
            imagePath = "clouds.png";
          } else if (res.data.weather[0].main === "Rain") {
            imagePath = "rain.png";
          } else if (res.data.weather[0].main === "Clear") {
            imagePath = "clear.png";
          } else if (res.data.weather[0].main === "Snow") {
            imagePath = "snow.png";
          } else if (res.data.weather[0].main === "Drizzle") {
            imagePath = "drizzle.png";
          }else if (res.data.weather[0].main === "Humidity") {
            imagePath = "humidity.png";
          }else {
            imagePath = "mist.png";
          }

          console.log(res.data);
            const celcius = res.data.main.temp;
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            imagePath: imagePath
          });
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <div className="card">
        <div className="search">
          <input type="text" placeholder="Enter city" onChange={e => setName(e.target.value)} />
          <button><img src="search.png" alt="Search Icon" onClick={handleClick} /></button>
        </div>

        <div className="weather">
          <img src={data.imagePath} className="weather-icon" alt="Weather Icon" />
          <h1 className="temp">{Math.round(data.celcius - 273.15 )} °C</h1>
          <h2 className="city">{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src="humidity.png" alt="Humidity Icon" />
              <div>
                <p>Humidity</p>
                <p className="humidity">{data.humidity}%</p>
              </div>
            </div>
            <div className="col">
              <img src="wind.png" alt="Wind Icon" />
              <div>
                <p>Wind Speed</p>
                <p>{data.speed} Km/hr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
