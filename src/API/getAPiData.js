//Get json data from your API using fetch
export const getDataFromAPI = async (url) => {
  //Fetch request
  let response = await fetch(url);

  return response;
};
