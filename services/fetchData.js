import Keys from "../Keys.js"; // Hidden file for username, replace with your own username

/**
 * Function that handles fetching of data and is called by search screen. The function is passed the type of the search,
 * the searchphrase and some state variables for changing the data, error message and loading variable for the search screen
 */

const USERNAME = Keys.API_USERNAME; // Username for API call, replace with your own
const START_GEO_URL = `http://api.geonames.org/searchJSON?`; // Start of URL to the API to fetch from, ask for JSON format
const END_GEO_URL = `&maxRows=1&username=${USERNAME}`; // End of URL, ask for one result and give username
let GEO_URL = ""; // Variable for the url to be used in the search

export const fetchData = (
  type,
  searchPhrase,
  isLoading,
  setLoading,
  data,
  setData,
  topCitiesData,
  setTopCitiesData,
  errorMessage,
  setErrorMessage
) => {
  // If search type is city
  if (type === 1) {
    GEO_URL = `${START_GEO_URL}q=${searchPhrase}&featureClass=P${END_GEO_URL}`; // City search url (feature class is P in API)

    /** Fetch city data from API using url, convert to JSON and set data state variable. When finished, set loading to false */
    fetch(GEO_URL)
      .then((response) => response.json())
      .then((json) => setData(json.geonames))
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));
    // If search for country instead
  } else {
    GEO_URL = `${START_GEO_URL}q=${searchPhrase}&featureCode=PCLI${END_GEO_URL}`; // Country search url (feature code is PCLI in API)
    /** Fetch first the country from the API using the url, convert to JSON, set data state variable and pass the country code to the nested fetch  */
    fetch(GEO_URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const res = json.geonames;
        setData(res);
        if (res.length > 0) {
          return res[0].countryCode;
        }
      })
      /** Set the url using the country code, then fetch the top populated cities, set state variable for the cities and set loading to false  */
      .then((code) => {
        GEO_URL = `${START_GEO_URL}country=${code}&featureClass=P&maxRows=3&orderBy=population&username=${USERNAME}`; // Url to find top 5 populated cities using country code
      })
      .then(() => {
        return fetch(GEO_URL)
          .then((response) => response.json())
          .then((json) => setTopCitiesData(json.geonames))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));
  }
};
