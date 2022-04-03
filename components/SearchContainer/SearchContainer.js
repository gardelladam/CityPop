import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Component to display on search screen when searching. Different title and tooltip depending on type of search
 */

const SearchContainer = (props) => {
  const { type, searchPhrase, setSearchPhrase, submit, setSubmit } = props;
  const [clicked, setClicked] = useState(false); // Variable for changing style of search bar depending on clicked or not

  const title = type === 1 ? "SEARCH BY CITY" : "SEARCH BY COUNTRY";
  const toolTip = type === 1 ? "Enter a city" : "Enter a country";
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{title}</Text>
      </View>
      <View style={globalStyles.content}>
        <SearchBar // Searchbar component, pass state variables and tooltip to be displayed
          toolTip={toolTip}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          submit={submit}
          setSubmit={setSubmit}
        />
      </View>
    </View>
  );
};

export default SearchContainer;
