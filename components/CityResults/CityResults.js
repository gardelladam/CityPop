import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Component to display result of a search by city.
 *  Receives the city as a data object and destructures the name and population.
 */

const CityResults = (props) => {
  const data = props.data;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{data.name}</Text>
      </View>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>{data.population}</Text>
      </View>
    </View>
  );
};

export default CityResults;
