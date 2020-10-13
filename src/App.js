//React
import React, { useEffect, useState } from "react";
//Styles
import "./App.scss";
import { Button } from "./components/Button/Button";
import { Settings } from "./components/Settings/Settings";
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
  const [darkTheme, setdarkTheme] = useState(false);

  //Apply browser theme
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
