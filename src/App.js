//React
import React, { useState, useEffect } from "react";
//Styles
import "./App.scss";
//Components
import Title from "./components/Title/Title.jsx";
//Hooks
import { useTime } from "./hooks/useTime";
import { usePosition } from "./hooks/usePosition";
import { useDate } from "./hooks/useDate";
import { Subtitle } from "./components/Subtitle/Subtitle";

//Component
function App() {
  //Logic

  //Location
  const { location, error } = usePosition();
  //Data from API
  const [dataFromAPI, setDataFromAPI] = useState(null);
  //Weather
  const [weather, setWeather] = useState(null);
  //Location info (city name)
  const [locationInfo, setLocationInfo] = useState(null);

  //Get and update time
  const time = useTime();
  //Get date
  const date = useDate();

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

  //UI
  return (
    <div className="App ligth">
      <Title text="Hello world!" />
      <Subtitle text="Small hello ;)" />
    </div>
  );
}

export default App;
