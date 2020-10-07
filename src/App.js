//React
import React, { useState, useEffect } from "react";
//Styles
import "./App.scss";
//Components
import { Weather } from "./components/Weather/Weather";
import { Date } from "./components/Date/Date";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { Switcher } from "./components/Switcher/Switcher";
import { Button } from "./components/Button/Button";
//Hooks
import { useBrowserTheme } from "./hooks/useBrowserTheme";
//Icons
import icon from "./icons/Vector.svg";
import { Settings } from "./components/Settings/Settings";

//Component
function App() {
  //Logic

  //Hook returns true if system dark theme (false if light)
  const browserTheme = useBrowserTheme();

  //Theme
  const [darkTheme, setdarkTheme] = useState(false);

  useEffect(() => {
    if (browserTheme) {
      setdarkTheme(browserTheme);
    }
  }, [browserTheme]);

  //UI
  return (
    <div className={`App ${darkTheme ? "dark" : "ligth"}`}>
      {/* <div className="App__top-part">
        <Weather />
        <Date />
      </div>
      <div className="App__middle-part">
        <AnalogClock />
        <DigitalClock />
      </div> */}
      <Settings />
      <div className="App__bottom-part">
        <Button icon={icon} />
      </div>
    </div>
  );
}

export default App;
