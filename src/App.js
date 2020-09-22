import React, { useState, useEffect } from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { useTime } from "./hooks/useTime";
import { usePosition } from "./hooks/usePosition";

function App() {
  const { location, error } = usePosition();

  //Data from API
  const [dataFromAPI, setDataFromAPI] = useState(null);
  //Weather
  const [weather, setWeather] = useState(null);
  //Location info (city name)
  const [locationInfo, setLocationInfo] = useState(null);

  //Get and update time
  const time = useTime();

  //Api request
  useEffect(() => {
    if (location) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=4211749ff95543348f4191634202508&q=${location.latitude}, ${location.longitude}`
      )
        .then((response) => response.json())
        .then(function (data) {
          setDataFromAPI(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);

  //Get weather
  useEffect(() => {
    if (dataFromAPI) {
      let weather = dataFromAPI.current;

      setWeather(weather);
    }
  }, [dataFromAPI]);

  //Get location info
  useEffect(() => {
    if (dataFromAPI) {
      let weather = dataFromAPI.location;

      setLocationInfo(weather);
    }
  }, [dataFromAPI]);

  const toggleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      {location && (
        <Title text={`${location.latitude}, ${location.longitude}`} />
      )}
      {error && <Title text={`${error}`} />}

      {weather && <Title text={`${weather.temp_c}°`} />}
      {weather && (
        <img
          src={`${weather.condition.icon}`}
          alt={`${weather.condition.text} weather`}
        />
      )}

      {locationInfo && (
        <Title text={`${locationInfo.name}`} onClick={toggleClick} />
      )}

      {time && <Title text={`${time.hours}:${time.minutes}:${time.seconds}`} />}
    </div>
  );
}

export default App;
