import { useState, useEffect } from "react";

//Default update interval = 1000ms
export const useTime = (interval = 1000) => {
  //Current time
  const [now, setNow] = useState(new Date());
  //Final time object
  const [time, setTime] = useState(null);

  //Time fotmat function (12:1:1 = 12:01:01)
  const formatTime = (num) => {
    const formatedNum = num.toString().padStart(2, "0");

    return formatedNum;
  };

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
      hours: formatTime(now.getHours()),
      minutes: formatTime(now.getMinutes()),
      seconds: formatTime(now.getSeconds()),
      //360 deg / 12 hours = 30 deg per hour
      hh: now.getHours() * 30,
      //360 deg / 60 = 6 deg per second/minute
      mm: now.getMinutes() * 6,
      ss: now.getSeconds() * 6,
    };

    setTime(timeData);
  }, [now]);

  return time;
};
