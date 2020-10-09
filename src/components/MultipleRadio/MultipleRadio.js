import React from "react";
//Styles
import "./multipleradio.scss";

//options is array with objects (keys: text, value, icon)
export const MultipleRadio = ({ props }) => {
  const sayHello = () => console.log("Hello");

  const options = props.map((options, index) => {
    return (
      <label className="radio__option" key={index}>
        <input
          className="radio__input"
          type="radio"
          value={options.value}
          name={options.name}
          defaultChecked={options.checked}
        />
        {/* visual button */}
        <span className="radio__box"></span>
        {/* if text content*/}
        {options.text && <span className="radio__text">{options.text}</span>}
        {/* if icon content*/}
        {options.icon && (
          <img
            src={options.img.src}
            alt={
              options.img.alt
                ? options.img.alt
                : "Sorry, I forget add description"
            }
          />
        )}
      </label>
    );
  });

  return <div className="radio">{options}</div>;
};
