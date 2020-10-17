import React, { useState } from "react";
//Styles
import "./switcher.scss";

export const Switcher = ({ ariaLabel, callback }) => {
  const [enabled, setEnabled] = useState(false);

  //Onclick function
  const toggleClick = () => {
    setEnabled(!enabled);

    //Props callback function
    if (callback) {
      callback()
    }
  };

  //Layout
  return (
    <button
      className={`switcher ${enabled ? "enabled" : ""}`}
      onClick={toggleClick}
      aria-label={`${enabled ? "disable" : "enable"} ${
        ariaLabel ? ariaLabel : "something"
      }`}
    ></button>
  );
};
