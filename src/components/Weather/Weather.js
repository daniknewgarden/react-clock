import React, { useEffect, useState } from "react";
import { getDataFromAPI } from "../../API/getAPiData";
//Hooks
import { usePosition } from "../../hooks/usePosition";
//Components
import { Subtitle } from "../Text/Subtitle/Subtitle";
import { Title } from "../Text/Title/Title";
//Styles
import "./weather.scss";

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
    setDataFromAPI(null);

    if (location) {
      const abortController = new AbortController();

      getDataFromAPI(
        `https://api.weatherapi.com/v1/current.json?key=4211749ff95543348f4191634202508&q=${location.latitude},${location.longitude}`,
        {
          signal: abortController.signal,
        }
      )
        .then((response) => response.json())
        .then(
          (result) => {
            if (abortController.signal.aborted) {
              return;
            }
            setDataFromAPI(result);
          },
          (error) => {
            console.log(error);
          }
        );
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
