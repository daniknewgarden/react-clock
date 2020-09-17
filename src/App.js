import React, { useState, useEffect } from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { useFetch } from "./hooks/useFetch";
import { usePosition } from "./hooks/usePosition";

function App() {
  const { location, error } = usePosition();

  //Data from API
  const [dataFromAPI, setDataFromAPI] = useState(null);

  //get data from API
  const data = useFetch(
    `https://api.weatherapi.com/v1/current.json?key=4211749ff95543348f4191634202508&q=London`
  );

  useEffect(() => {
    if (data) {
      setDataFromAPI(data);
      console.log(data);
    }
  }, []);

  return (
    <div className="App">
      {location && (
        <Title text={`${location.longitude}, ${location.latitude}`} />
      )}
      {error && <Title text={`${error}`} />}

      {dataFromAPI && <Title text={`data from API sucsess`} />}
    </div>
  );
}

export default App;
