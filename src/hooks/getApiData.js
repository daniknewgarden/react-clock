import { useState, useEffect } from "react";

//Get weather data from API
export const GetApiData = (latitude, longtitude) => {
  const [data, setData] = useState({});

  //API request
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=4211749ff95543348f4191634202508&q=${latitude},${longtitude}`
    )
      .then((response) => response.json())
      //Set responde data to state
      .then((data) => {
        setData(data);
      })
      //if error
      .catch((error) => {
        console.error(error);
      });
  }, [latitude, longtitude]);

  //Return data from API
  
  return data;
};
