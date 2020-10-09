import React, { useState, useEffect } from "react";
//Styles
import "./settings.scss";
//Components
import { Title } from "../Text/Title/Title";
import { Switcher } from "../Switcher/Switcher";
import { Button } from "../Button/Button";
import { MultipleRadio } from "../MultipleRadio/MultipleRadio";

export const Settings = ({ weather, timeFormat, tempUnits, darkTheme }) => {
  //MultipleRadio options
  const timeOptions = [
    { text: "°F", value: "_f", name: "temp", checked: false },
    { text: "°C", value: "_c", name: "temp", checked: true },
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
          <MultipleRadio props={timeOptions} />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Temp units" />
        <div className="settings__part">
          <MultipleRadio props={tempOptions} />
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
