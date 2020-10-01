import React from "react";
//Styles
import "./analogclock.scss";
//Hooks
import { useTime } from "../../hooks/useTime";

export const AnalogClock = () => {
  
  //Hook to get current time and analog clock arrow rotation
  const time = useTime();

  //UI
  return (
    <section className="analog-clock">
      {time && (
        <>
          <div
            className="analog-clock__hours hours animated"
            id="hr"
            style={{ transform: `rotateZ(${time.hh}deg)` }}
          >
            <div className="hr"></div>
          </div>
          <div
            className="analog-clock__minutes minutes animated"
            id="mn"
            style={{ transform: `rotateZ(${time.mm}deg)` }}
          >
            <div className="min"></div>
          </div>
          <div
            className="analog-clock__seconds seconds"
            id="sc"
            style={{ transform: `rotateZ(${time.ss}deg)` }}
          >
            <div className="sec"></div>
          </div>
        </>
      )}
    </section>
  );
};
