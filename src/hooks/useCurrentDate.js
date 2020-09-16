import { useState, useEffect } from "react";

// //Use date hook
// export const useCurrentDate = () => {
//   let now = new Date();

//   const [date, setDate] = useState(now);

//   useEffect(() => {
//     let obj = {
//       hours: date.getHours(),
//       minutes: date.getMinutes(),
//       seconds: date.getSeconds(),
//       //360 deg / 12 hours = 30 deg per hour
//       hh: date.getHours() * 30,
//       //360 deg / 60 seconds = 6 deg per second
//       mm: date.getMinutes() * 6,
//       ss: date.getSeconds() * 6,
//     };

//     setDate(obj);
//   }, []);

//   return { ...date };
// };

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({});

  const updateDate = () => {
    setDate(new Date());
  };

  setInterval(() => {
    updateDate();
  }, 1000);

  useEffect(() => {
    let data = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      //360 deg / 12 hours = 30 deg per hour
      hh: date.getHours() * 30,
      //360 deg / 60 seconds = 6 deg per second
      mm: date.getMinutes() * 6,
      ss: date.getSeconds() * 6,
    };

    setTime(data);
  }, [date]);

  return time;
};
