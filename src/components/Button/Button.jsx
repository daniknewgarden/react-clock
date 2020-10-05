import React, { useState, useEffect } from "react";
//Styles
import "./button.scss";

export const Button = ({ text, icon, callback }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log(enabled);
  }, [enabled]);

  const toggleClick = () => {
    setEnabled(!enabled);
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
