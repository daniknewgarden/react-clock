import React, { useState, useEffect } from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { useCurrentDate } from "./hooks/useCurrentDate";
import { usePosition } from "./hooks/usePosition";

function App() {
  const position = usePosition();

  const date = useCurrentDate();

  console.log(date);

  return (
    <div className="App">
      <Title text={`${position.longitude}, ${position.latitude}`} />

      <Title
        text={`${date.hours}:${date.minutes}:${date.seconds}, ${date.hh}, ${date.mm}, ${date.ss}`}
      />
    </div>
  );
}

export default App;
