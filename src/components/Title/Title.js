import React from "react";
import "./title.scss";

const Title = ({ text, onClick }) => {
  return (
    <h2 className={"title"} onClick={onClick}>
      {text}
    </h2>
  );
};

export default Title;
