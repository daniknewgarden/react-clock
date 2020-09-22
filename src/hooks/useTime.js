import { useState, useEffect } from "react";

//Default update interval = 1000ms
export const useTime = (interval = 1000) => {
  //Current time
  const [now, setNow] = useState(new Date());
  //Final time object
  const [time, setTime] = useState(null);

  //Update time
  useEffect(() => {
    const getTime = setInterval(() => {
      setNow(new Date());
    }, interval);
    return () => {
      clearInterval(getTime);
    };
  }, [interval]);

  //Get object with current hours, minutes, seconds and rotate degrees for analog clock arrows
  useEffect(() => {
    const timeData = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      //360 deg / 12 hours = 30 deg per hour
      hh: now.getHours() * 30,
      //360 deg / 60 seconds = 6 deg per second
      mm: now.getMinutes() * 6,
      ss: now.getSeconds() * 6,
    };

    setTime(timeData);
  }, [now]);

  return time;
};
