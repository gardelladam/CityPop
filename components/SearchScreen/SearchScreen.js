import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../globalStyles";

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params;

  if (type === 1) {
  }

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <CustomButton title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{type}</Text>
      </View>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>{type}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
