//Get weather data from API
function getApiData(position) {
  let APIdata = null;

  //API request
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=4211749ff95543348f4191634202508&q=${position.latitude},${position.longtitude}`
  )
    .then((response) => response.json())
    //Set responde data to state
    .then((data) => {
      APIdata = data;
    })
    //if error
    .catch((error) => {
      console.error(error);
    });

  //Return data from API
  return APIdata;
}
