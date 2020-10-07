import React from "react";
//Components
import { Title } from "../Text/Title/Title";
//Styles
import "./digitalclock.scss";
//Hooks
import { useTime } from "../../hooks/useTime";

export const DigitalClock = () => {
  const time = useTime();

  return (
    <section className="digital-clock">
      {time && <Title text={`${time.hours}:${time.minutes}`} />}
    </section>
  );
};
