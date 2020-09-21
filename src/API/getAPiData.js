//Get json data from your API using fetch
export const getDataFromAPI = (url) => {
  let data = null;

  //Fetch request
  fetch(url)
    .then((response) => response.json())
    .then(function (dataFromAPI) {
      data = dataFromAPI;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};
