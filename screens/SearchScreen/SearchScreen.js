import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import SearchContainer from "../../components/SearchContainer/SearchContainer.js";
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
  const { type } = route.params; // Get the type of search being passed

  /** State variables and functions for setting them using the useState hook */
  const [searchPhrase, setSearchPhrase] = useState(""); // Entered text in search bar
  const [submit, setSubmit] = useState(false); // Variable for submitting search
  const [isLoading, setLoading] = useState(true); // Variable for indicating data is loading
  const [data, setData] = useState([]); // Variable for fetched primary data
  //const [countryData, setCountryData] = useState([]); // Variable for fetched country data
  const [topCitiesData, setTopCitiesData] = useState([]); // Variable for fetched data of top cities in a country
  const [errorMessage, setErrorMessage] = useState(null);

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
          .then((json) => setData(json.geonames))
          .catch((error) => {
            console.error(error);
            setErrorMessage(error.message);
          })
          .finally(() => setLoading(false));
      } else {
        GEO_URL = `${BASE_GEO_URL}q=${searchPhrase}&featureCode=PCLI&maxRows=1&username=${USERNAME}`; // Country search url
        let countryCode = "";

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
          .then((code) => {
            GEO_URL = `${BASE_GEO_URL}country=${code}&featureClass=P&maxRows=3&orderBy=population&username=${USERNAME}`; // Url to find top 5 populated cities using country code
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
    }
  }, [submit]);

  useEffect(() => {
    if (isLoading === false) {
      if (data.length > 0) {
        if (type === 1) {
          navigation.navigate("City", { data: data[0] });
        } else {
          navigation.navigate("Country", {
            data: data[0],
            topCitiesData: topCitiesData,
          });
        }
      }
    }
  }, [isLoading]);

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
      // If submitted, display loading indicator until data is fetched
    } else {
      if (isLoading) {
        return (
          <View style={styles.placeHolder}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      } else {
        if (errorMessage) {
          return (
            <View style={styles.placeHolder}>
              <Text style={styles.text}> Error: {errorMessage}</Text>
            </View>
          );
        } else if (data.length < 1) {
          return (
            <View style={styles.placeHolder}>
              <Text style={styles.text}>
                No results, check the spelling or try a different search term
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
        <CustomButton title="Back" onPress={() => navigation.popToTop()} />
      </View>
      <View style={globalStyles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default SearchScreen;
