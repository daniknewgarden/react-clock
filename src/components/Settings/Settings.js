import React, { useEffect } from "react";
import { MultipleRadio } from "../MultipleRadio/MultipleRadio";
import { Switcher } from "../Switcher/Switcher";
//Components
import { Title } from "../Text/Title/Title";
//Styles
import "./settings.scss";

export const Settings = ({
  weather,
  weatherState,
  darkTheme,
  themeState,
  celsius,
  setCelsius,
}) => {
  //MultipleRadio options (icon:{src: `${imported icon}`, alt: 'string'})
  const tempOptions = [
    { text: "°F", value: "_f", name: "temp" },
    { text: "°C", value: "_c", name: "temp" },
  ];

  const timeOptions = [
    { text: "12hr", value: "12", name: "time" },
    { text: "24hr", value: "24", name: "time" },
  ];

  const changeTempUnits = (units) => {
    if (setCelsius) {
      setCelsius(units === "_c");
    }
  };

  return (
    <section className="settings">
      <div className="settings__part">
        <Title text="Weather" />
        <div className="settings__controls">
          <Switcher
            callback={weather}
            defaultState={weatherState}
            ariaLabel="weather"
          />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Temp units" />
        <div className="settings__part">
          <MultipleRadio
            props={tempOptions}
            defaultOption={celsius ? tempOptions[1] : tempOptions[0]}
            callback={(option) => changeTempUnits(option.value)}
          />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Time format" />
        <div className="settings__part">
          <MultipleRadio props={timeOptions} defaultOption={"24"} />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Dark theme" />
        <div className="settings__controls">
          <Switcher
            callback={darkTheme}
            defaultState={themeState}
            ariaLabel="dark theme"
          />
        </div>
      </div>
    </section>
  );
};
