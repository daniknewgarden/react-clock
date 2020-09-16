import React from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import { usePosition } from "./hooks/usePosition";

function App() {
  const { location, error } = usePosition();

  return (
    <div className="App">
      {location && (
        <Title text={`${location.longitude}, ${location.latitude}`} />
      )}
    </div>
  );
}

export default App;
