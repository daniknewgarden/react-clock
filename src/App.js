//React
import React, { useEffect, useState } from "react";
//Router
import { Route, useHistory } from 'react-router-dom';
//Styles
import "./App.scss";
//Components
import { Weather } from './components/Weather/Weather';
import { Date } from './components/Date/Date';
import { AnalogClock } from './components/AnalogClock/AnalogClock';
import { DigitalClock } from './components/DigitalClock/DigitalClock';
import { Button } from "./components/Button/Button";
import { Settings } from "./components/Settings/Settings";
//Hooks
import { useBrowserTheme } from "./hooks/useBrowserTheme";
//Icons
import icon from "./icons/SettingsUnactive.svg";

//Component
function App() {
  //Logic

  //Hook returns true if system dark theme (false if light)
  const browserTheme = useBrowserTheme();

  //Theme
  const [darkTheme, setDarkTheme] = useState(false);
  //Settings
  const [settingsOpened, setSettingsOpened] = useState(false)

  // Apply browser theme
  useEffect(() => {
    if (browserTheme) {
      setDarkTheme(browserTheme);
    }
  }, [browserTheme]);

  //Routing
  const history = useHistory();

  const handleHistory = () => {
    setSettingsOpened(!settingsOpened)
  }

  useEffect(() => {
    settingsOpened ? history.push('/settings') : history.push('/home')
  }, [history, settingsOpened])

  //UI
  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      <Route path='/home'>
        <div className="App__top-part">
          <Weather />
          <Date />
        </div>
        <div className="App__middle-part">
          <AnalogClock />
          <DigitalClock />
        </div>
      </Route>
      <Route path='/settings'>
        <Settings />
      </Route>
      <div className="App__bottom-part">
        <Button icon={icon} onClick={handleHistory}/>
      </div>
    </div>
  );
}

export default App;
