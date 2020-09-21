//Get json data from your API using fetch
export const getDataFromAPI = (url) => {
  let APIdata = null;

  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      APIdata = data;
    })
    .catch((error) => {
      console.log(error);
    });

  return APIdata;
};
