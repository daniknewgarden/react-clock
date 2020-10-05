import React, { useState, useEffect } from "react";
//Styles
import "./switcher.scss";

export const Switcher = ({ ariaLabel }) => {
  const [enabled, setEnabled] = useState(false);

  //Onclick function
  const toggleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <button
      className={`switcher ${enabled ? "enabled" : ""}`}
      onClick={toggleClick}
      aria-label={`${enabled ? "disable" : "enable"} ${
        ariaLabel ? ariaLabel : "somethink"
      }`}
    ></button>
  );
};
