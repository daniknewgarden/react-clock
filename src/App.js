import React, { useState, useEffect } from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { usePosition } from "./hooks/usePosition";
import { GetApiData } from "./hooks/getApiData";

function App() {
  const position = usePosition();
  const getData = GetApiData(position.latitude, position.longitude);

  const [weather, setWeather] = useState(null);
  const [data, setData] = useState(getData);

  useEffect(() => {
    setWeather(getData.current);

    // console.log(weather);
  }, [getData, position, weather]);

  return (
    <div className="App">
      <Title text={`${position.longitude}`} />

      {weather && <Title text={`${weather.temp_c}°`} />}
    </div>
  );
}

export default App;
