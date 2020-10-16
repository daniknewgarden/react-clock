import React, { useState } from "react";
//Styles
import "./button.scss";

export const Button = ({ text, icon, onClick }) => {
  const [enabled, setEnabled] = useState(false);

  const toggleClick = () => {
    setEnabled(!enabled);

    //props callback function call
    if (onClick) {
      onClick()
    }
  };

  return (
    <button
      className={`button ${enabled ? "enabled" : ""}`}
      aria-label="lol"
      onClick={toggleClick}
    >
      {icon && <img className="button__icon" src={icon} alt="icon" />}
      {text && <span className="button__text">{text}</span>}
    </button>
  );
};
