import { useState, useEffect } from "react";

export const usePosition = () => {
  //Object with latitude, longitude, error
  const [position, setPosition] = useState({});
  //Error
  const [error, setError] = useState(null);

  //If permission granted
  const onSuccess = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  //If permission denied or another error
  const onError = (error) => {
    setError(error.message);
  };

  //Location request
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return { ...position, error };
};
