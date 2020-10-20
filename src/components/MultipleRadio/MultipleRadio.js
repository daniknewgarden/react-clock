import React, { useState, useEffect } from 'react'

//Styles
import "./multipleradio.scss";


//options is array with objects (keys: text, value, icon)
export const MultipleRadio = ({ props, defaultOption, callback }) => {

  const [option, setOption] = useState(defaultOption)

  useEffect(() => {
    console.log(option)
  }, [option])

  const changeOption = (arg) => setOption(arg);

  const options = props.map((options, index) => {

    return (
      <label className="radio__option" key={index}>
        <input
          className="radio__input"
          type="radio"
          value={options.value}
          name={options.name}
          defaultChecked={options.checked}
          onChange={() => changeOption(options.value)}
        />
        {/* visual button */}
        <span className="radio__box"></span>
        {/* if text content*/}
        {options.text && <span className="radio__text">{options.text}</span>}
        {/* if icon content*/}
        {options.icon && (
          <img
            src={options.icon.src}
            alt={
              options.icon.alt
                ? options.icon.alt
                : "Sorry, I forget add image description"
            }
          />
        )}
      </label>
    );
  });

  return <div className="radio">{options}</div>;
};
