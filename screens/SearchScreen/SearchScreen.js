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
import { fetchData } from "../../services/fetchData.js";

/**
 * Screen that handles searching by calling separate function. Redirects to result screens if successful search.
 * Also displays loading indicator or error messages
 */

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params; // Get the type of search being passed from home screen

  /** State variables and functions for setting them using the useState hook */
  const [searchPhrase, setSearchPhrase] = useState(""); // Entered text in search bar
  const [submit, setSubmit] = useState(false); // Variable for submitting search
  const [isLoading, setLoading] = useState(true); // Variable for indicating data is loading
  const [data, setData] = useState([]); // Variable for fetched primary data (City or country)
  const [topCitiesData, setTopCitiesData] = useState([]); // Variable for fetched data of top cities in a country
  const [errorMessage, setErrorMessage] = useState(null); // Variable to store potential error message to display

  let GEO_URL = "";

  // useEffect hook for API call, executes when submit variable changes
  useEffect(() => {
    if (submit === true) {
      // Call fetchData in services/fetchData.js to fetch data and setting passed state variables
      fetchData(
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
      );
    }
  }, [submit === true]);

  // useEffect hook for automatically navigating to one of th result pages when loading is set to false by the fetch function
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
      // If submitted, display loading indicator until data is fetched and screen is changed
    } else {
      if (isLoading) {
        return (
          <View style={styles.placeHolder}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      } else {
        // If error message exists, display it
        if (errorMessage) {
          return (
            <View style={styles.placeHolder}>
              <Text style={styles.text}> Error: {errorMessage}</Text>
            </View>
          );
          // if no data is set, display "no results"
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

  // Component on screen
  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <CustomButton title="Home" onPress={() => navigation.popToTop()} />
      </View>
      <View style={globalStyles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default SearchScreen;
