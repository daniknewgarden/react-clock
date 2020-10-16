import React from "react";
import { MultipleRadio } from "../MultipleRadio/MultipleRadio";
import { Switcher } from "../Switcher/Switcher";
//Components
import { Title } from "../Text/Title/Title";
//Styles
import "./settings.scss";


export const Settings = ({ weather, timeFormat, tempUnits, darkTheme }) => {

  //MultipleRadio options (icon:{src: `${imported icon}`, alt: 'string'})
  const timeOptions = [
    { text: "°F", value: "_f", name: "temp", checked: false },
    { text: '°C', value: "_c", name: "temp", checked: true },
  ];

  const tempOptions = [
    { text: "12hr", value: "12", name: "time", checked: false },
    { text: "24hr", value: "24", name: "time", checked: true },
  ];

  return (
    <section className="settings">
      <div className="settings__part">
        <Title text="Weather" />
        <div className="settings__controls">
          <Switcher />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Time format" />
        <div className="settings__part">
          <MultipleRadio props={timeOptions} defaultOption='_c'/>
        </div>
      </div>
      <div className="settings__part">
        <Title text="Temp units" />
        <div className="settings__part">
          <MultipleRadio props={tempOptions} defaultOption={'24'}/>
        </div>
      </div>
      <div className="settings__part">
        <Title text="Dark theme" />
        <div className="settings__controls">
          <Switcher />
        </div>
      </div>
    </section>
  );
};
