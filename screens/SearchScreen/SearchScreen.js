import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import SearchContainer from "../../components/SearchContainer/SearchContainer.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import Keys from "../../Keys.js";

const USERNAME = Keys.API_USERNAME;
const BASE_GEO_URL = `http://api.geonames.org/searchJSON?q=`;

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params;

  const [searchPhrase, setSearchPhrase] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let GEO_URL = "";

  useEffect(() => {
    if (submit === true) {
      if (type === 1) {
        GEO_URL = `${BASE_GEO_URL}${searchPhrase}&featureClass=P&maxRows=1&username=${USERNAME}`;
      } else {
        GEO_URL = `${BASE_GEO_URL}${searchPhrase}&featureCode=PCLI&maxRows=1&username=${USERNAME}`;
      }
      console.log(GEO_URL);
      fetch(GEO_URL)
        .then((response) => response.json())
        .then((json) => setData(json.geonames))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [submit]);

  const renderContent = () => {
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
    } else {
      if (isLoading === true) {
        return (
          <View style={globalStyles.titles}>
            <Text> Loading </Text>
          </View>
        );
      } else {
        if (data.length > 0) {
          return (
            <View style={globalStyles.titles}>
              <Text> {data[0].name}</Text>
              <Text> {data[0].population}</Text>
            </View>
          );
        } else {
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
