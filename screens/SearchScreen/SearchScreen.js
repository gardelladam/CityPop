import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params;

  const title = type === 1 ? "SEARCH BY CITY" : "SEARCH BY COUNTRY";
  const tooltip = type === 1 ? "Enter a city" : "Enter a country";

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <CustomButton title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{title}</Text>
      </View>
      <View style={globalStyles.content}></View>
    </SafeAreaView>
  );
};

export default SearchScreen;
