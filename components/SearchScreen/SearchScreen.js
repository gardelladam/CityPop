import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import styles from "./styles";
import globalStyles from "../globalStyles";

const SearchScreen = ({ route, navigation }) => {
  const { type } = route.params;

  if (type === 1) {
  }

  return (
    <View style={globalStyles.appContainer}>
      <View style={globalStyles.titleContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text style={globalStyles.title}>{type}</Text>
      </View>
    </View>
  );
};

export default SearchScreen;
