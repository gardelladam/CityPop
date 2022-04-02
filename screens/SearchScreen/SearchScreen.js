import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import SearchContainer from "../../components/SearchContainer/SearchContainer.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params;

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [submit, setSubmit] = useState(false);

  const title = type === 1 ? "SEARCH BY CITY" : "SEARCH BY COUNTRY";
  const toolTip = type === 1 ? "Enter a city" : "Enter a country";

  const search = <SearchContainer />;

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
      return (
        <View style={globalStyles.titles}>
          <Text> {searchPhrase}</Text>
        </View>
      );
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
