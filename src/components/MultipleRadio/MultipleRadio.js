import React, { useState, useEffect } from "react";

//Styles
import "./multipleradio.scss";

//options is array with objects
export const MultipleRadio = ({ props, defaultOption, callback }) => {
  const [option, setOption] = useState(defaultOption);

  useEffect(() => {
    if (callback) {
      callback(option);
    }
  }, [option]);

  const changeOption = (arg) => setOption(arg);

  const options = props.map((item, index) => {
    return (
      <label className="radio__option" key={index}>
        <input
          className="radio__input"
          type="radio"
          value={item.value}
          name={item.name}
          defaultChecked={item.value === option.value}
          onChange={() => changeOption(item)}
        />
        {/* visual button */}
        <span className="radio__box"></span>
        {/* if text content*/}
        {item.text && <span className="radio__text">{item.text}</span>}
        {/* if icon content*/}
        {item.icon && (
          <img
            src={item.icon.src}
            alt={
              item.icon.alt
                ? item.icon.alt
                : "Sorry, I forget add image description"
            }
          />
        )}
      </label>
    );
  });

  return <div className="radio">{options}</div>;
};
