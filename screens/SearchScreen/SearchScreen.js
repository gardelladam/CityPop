import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import SmallButton from "../../components/SmallButton/SmallButton.js";
import SearchContainer from "../../components/SearchContainer/SearchContainer.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import { fetchData } from "../../services/fetchData.js";

/**
 * Screen that handles searching by calling separate function.
 * Displays loading indicator or error messages. Redirects to result screens if successful search.
 */

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params; // Get the type of search being passed from home screen

  /** State variables and functions for setting them using the useState hook */
  const [searchPhrase, setSearchPhrase] = useState(""); // Entered text in search bar
  const [submit, setSubmit] = useState(false); // Variable for submitting search
  const [isLoading, setLoading] = useState(true); // Variable for indicating that data is loading
  const [data, setData] = useState([]); // Variable for fetched primary data (City or country)
  const [topCitiesData, setTopCitiesData] = useState([]); // Variable for fetched data of top cities in a country
  const [errorMessage, setErrorMessage] = useState(null); // Variable to store potential error message to display

  let GEO_URL = "";

  const resetValues = () => {
    setSubmit(false);
    setLoading(true);
    setSearchPhrase("");
    setErrorMessage(null);
    setData([]);
    setTopCitiesData([]);
  };

  // useEffect hook for API call, executes when submit variable changes
  useEffect(() => {
    if (submit === true) {
      // Call fetchData in services/fetchData.js to fetch data and set passed state variables
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
    return () => {};
  }, [submit === true]);

  // useEffect hook for automatically navigating to one of the result pages when loading is set to false by the fetch function
  useEffect(() => {
    if (isLoading === false) {
      //Check that we got result before navigating.
      if (data.length > 0) {
        //Reset variables for when coming back to search page
        resetValues();

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
    return () => {};
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
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="black" />
              <Text style={styles.loadingText}>Loading, please wait...</Text>
            </View>
          </View>
        );
      } else {
        // If error message exists, display it
        if (errorMessage) {
          return (
            <View style={styles.placeHolder}>
              <View style={styles.textContainer}>
                <Text style={styles.text}> Error: {errorMessage}</Text>
              </View>
            </View>
          );
          // if no data is set, display "no results"
        } else if (data.length < 1) {
          return (
            <View style={styles.placeHolder}>
              <View style={styles.backButton}>
                <SmallButton
                  title="Back to search"
                  onPress={() => {
                    resetValues();
                  }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  No results, check the spelling or try a different search
                  term...
                </Text>
              </View>
            </View>
          );
        }
      }
    }
  };

  // Return components on screen
  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <SmallButton title="Home" onPress={() => navigation.popToTop()} />
      </View>
      <View style={globalStyles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

export default SearchScreen;
