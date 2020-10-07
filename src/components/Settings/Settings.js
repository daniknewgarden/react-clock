import React, { useState, useEffect } from "react";
//Styles
import "./settings.scss";
//Components
import { Title } from "../Text/Title/Title";
import { Switcher } from "../Switcher/Switcher";
import { Button } from "../Button/Button";

export const Settings = ({ weather, timeFormat, tempUnits, darkTheme }) => {
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
        <div className="settings__controls">
          <Button text="12 hr" />
          <Button text="24 hr" />
        </div>
      </div>
      <div className="settings__part">
        <Title text="Temp units" />
        <div className="settings__controls">
          <Button text="°F" />
          <Button text="°C" />
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
