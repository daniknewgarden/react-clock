import React from "react";
//Styles
import "./date.scss";
//Hooks
import { useDate } from "../../hooks/useDate";

export const Date = () => {
  const date = useDate();

  return (
    <section className="date">
      {date && (
        <>
          <h2 className="date__day">{date.day}</h2>
          <h2 className="date__mount">{date.monthName}</h2>
        </>
      )}
    </section>
  );
};
