//React
import React, { useState, useEffect } from "react";
//Styles
import "./App.scss";
//Components
import Title from "./components/Text/Title/Title.jsx";
import { Subtitle } from "./components/Text/Subtitle/Subtitle";
import { Date } from "./components/Date/Date";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
//Hooks
import { useTime } from "./hooks/useTime";
import { useDate } from "./hooks/useDate";
import { Weather } from "./components/Weather/Weather";
import { Switcher } from "./components/Switcher/Switcher";

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
      <div className="App__top-part">
        <Weather />
        <Date />
      </div>
      <AnalogClock />
      <DigitalClock />
      <Switcher />
    </div>
  );
}

export default App;
