import React from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { usePosition } from "./hooks/usePosition";

function App() {
  const position = usePosition();

  return (
    <div className="App">
      <Title text={`${position.latitude}, ${position.longitude}`} />
    </div>
  );
}

export default App;
