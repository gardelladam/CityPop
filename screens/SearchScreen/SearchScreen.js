import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import SearchContainer from "../../components/SearchContainer/SearchContainer.js";
import CityResults from "../../components/CityResults/CityResults.js";
import CountryResults from "../../components/CountryResults/CountryResults.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import Keys from "../../Keys.js";

/**
 * Screen that handles searching and displaying results.
 * Functions and displays differently depending on type passed by home screen (City or country search)
 * and if a search is made or not (show search bar or show results).
 */

const USERNAME = Keys.API_USERNAME; // Username for API call, replace with your own

const BASE_GEO_URL = `http://api.geonames.org/searchJSON?`; // Base URL to API to fetch from

const SearchScreen = ({ route, navigation }) => {
  const { initialType } = route.params; // Get the type of search being passed

  /** State variables and functions for setting them using the useState hook */
  const [searchPhrase, setSearchPhrase] = useState(""); // Entered text in search bar
  const [submit, setSubmit] = useState(false); // Variable for submitting search
  const [isLoading, setLoading] = useState(true); // Variable for indicating data is loading
  const [cityData, setCityData] = useState([]); // Variable for fetched city data
  const [countryData, setCountryData] = useState([]); // Variable for fetched country data
  const [topCitiesData, setTopCitiesData] = useState([]); // Variable for fetched data of top cities in a country
  const [type, setType] = useState(initialType); // current type of result being shown

  //console.log(cityData);
  //(console.log(type);

  let GEO_URL = "";

  // useEffect hook for API call, executes when submit variable changes
  useEffect(() => {
    // If searchPhrase is submitted, make API call
    if (submit === true) {
      if (type === 1) {
        GEO_URL = `${BASE_GEO_URL}q=${searchPhrase}&featureClass=P&maxRows=1&username=${USERNAME}`; // City search url
        /** fetch data from API using url, convert to json and set data variable. When finished, set loading to false */
        fetch(GEO_URL)
          .then((response) => response.json())
          .then((json) => setCityData(json.geonames))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      } else {
        GEO_URL = `${BASE_GEO_URL}q=${searchPhrase}&featureCode=PCLI&maxRows=1&username=${USERNAME}`; // Country search url
        let countryCode = "";

        fetch(GEO_URL)
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            res = json.geonames;
            setCountryData(res);
            if (res.length > 0) {
              return res[0].countryCode;
            }
          })
          .then((code) => {
            GEO_URL = `${BASE_GEO_URL}country=${code}&featureClass=P&maxRows=3&orderBy=population&username=${USERNAME}`; // Url to find top 5 populated cities using country code
          })
          .then(() => {
            return fetch(GEO_URL)
              .then((response) => response.json())
              .then((json) => setTopCitiesData(json.geonames))
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }
    }
  }, [submit]);

  /** Function to render the container on the screen depending on the state variables */
  const renderContent = () => {
    /** If nothing is submitted, return the search container. Pass search type, searchPhrase and submit together with set functions */
    if (submit === false) {
      return (
        <SearchContainer
          type={type}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          submit={submit}
          setSubmit={setSubmit}
        />
      );
      /** If submitted */
    } else {
      /** Display loading indicator until data is fetched */
      if (isLoading === true) {
        return (
          <View style={globalStyles.titles}>
            <Text> Loading </Text>
          </View>
        );
        /** Loading finished */
      } else {
        /** If data is successfully fetched. Display results depending on search type */
        if (type === 1 && cityData.length > 0) {
          return <CityResults data={cityData[0]} />;
        } else if (type === 2 && countryData.length > 0) {
          const countryName = countryData[0].name;
          return (
            <CountryResults
              setCityData={setCityData}
              setType={setType}
              countryName={countryName}
              topCitiesData={topCitiesData}
            />
          );
        } else {
          /** If no data fetched */
          return (
            <View style={globalStyles.titles}>
              <Text>
                No results, check the spelling or try again with a different
                search
              </Text>
            </View>
          );
        }
      }
    }
  };

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <CustomButton title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={globalStyles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default SearchScreen;
