import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
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

  if (submit === true) {
    return (
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{searchPhrase}</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={globalStyles.appContainer}>
        <View style={globalStyles.topBar}>
          <CustomButton title="Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>{title}</Text>
        </View>
        <View style={globalStyles.content}>
          <SearchBar
            toolTip={toolTip}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            submit={submit}
            setSubmit={setSubmit}
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default SearchScreen;
