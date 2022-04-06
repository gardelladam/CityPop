import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import CustomButton from "../../components/CustomButton/CustomButton.js";

/**
 * Component to display result of a search by city.
 *  Receives the city as a data object and destructures the name and population.
 */

const CityScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={globalStyles.appContainer}>
      <View style={globalStyles.container}>
        <View style={globalStyles.topBar}>
          <CustomButton
            title="Back"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>{data.name}</Text>
        </View>
        <View style={globalStyles.content}>
          <Text style={globalStyles.title}>{data.population}</Text>
        </View>
      </View>
    </View>
  );
};

export default CityScreen;
