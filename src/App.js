//React
import React, { useEffect, useState } from "react";
//Styles
import "./App.scss";
import { AnalogClock } from "./components/AnalogClock/AnalogClock";
//Components
import { Button } from "./components/Button/Button";
import { Date } from "./components/Date/Date";
import { DigitalClock } from "./components/DigitalClock/DigitalClock";
import { Settings } from "./components/Settings/Settings";
import { Weather } from "./components/Weather/Weather";
//Hooks
import { useBrowserTheme } from "./hooks/useBrowserTheme";
//Icons
import icon from "./icons/Vector.svg";

//Component
function App() {
  //Logic

  //Hook returns true if system dark theme (false if light)
  const browserTheme = useBrowserTheme();

  //Theme
  const [darkTheme, setDarkTheme] = useState(false);

  //Apply browser theme
  useEffect(() => {
    if (browserTheme) {
      setDarkTheme(browserTheme);
    }
  }, [browserTheme]);

  //UI
  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      <div className="App__top-part">
        <Weather />
        <Date />
      </div>
      <div className="App__middle-part">
        <AnalogClock />
        <DigitalClock />
      </div>
      <Settings />
      <div className="App__bottom-part">
        <Button icon={icon} />
      </div>
    </div>
  );
}

export default App;
