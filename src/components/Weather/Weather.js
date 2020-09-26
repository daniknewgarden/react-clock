import React, { useState, useEffect } from "react";
//Hooks
import { usePosition } from "../../hooks/usePosition";
//Styles
import "./weather.scss";
//Components
import { Subtitle } from "../Text/Subtitle/Subtitle";
import Title from "../Text/Title/Title";

export const Weather = () => {
  //Location
  const { location, error } = usePosition();
  //Data from API
  const [dataFromAPI, setDataFromAPI] = useState(null);
  //Weather
  const [weather, setWeather] = useState(null);
  //Temperature unit of measurement set false if you want to use fahrenheit
  const [celsius, setCelsius] = useState(true);
  //Location info (city name)
  const [locationInfo, setLocationInfo] = useState(null);

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

  return (
    <section className="weather">
      {locationInfo && <Title text={`${locationInfo.name}`} />}
      {weather && (
        <>
          <img
            src={`${weather.condition.icon}`}
            className="weather__icon"
            alt="weather condition icon"
          />
          <Subtitle
            text={celsius ? `${weather.temp_c}°` : `${weather.temp_f}°`}
          />
        </>
      )}
    </section>
  );
};
