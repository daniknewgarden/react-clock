//React
import React, { useState, useEffect } from "react";
//Styles
import "./App.scss";
//Components
import Title from "./components/Text/Title/Title.jsx";
import { Subtitle } from "./components/Text/Subtitle/Subtitle";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";
//Hooks
import { useTime } from "./hooks/useTime";
import { useDate } from "./hooks/useDate";
import { Weather } from "./components/Weather/Weather";

//Component
function App() {
  //Logic

  //Theme
  const [darkTheme, setdarkTheme] = useState(false);

  //Get and update time
  const time = useTime();

  //UI
  return (
    <div className={`App ${darkTheme ? "dark" : "ligth"}`}>
      <Weather />
      <AnalogClock />
    </div>
  );
}

export default App;
