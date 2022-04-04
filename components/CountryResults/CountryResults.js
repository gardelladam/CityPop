import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Component to display result of a search by country.
 *  Receives the country as a data object and the cities with the largest population as an array of data objects.
 */

const CountryResults = (props) => {
  const countryName = props.data.name;
  const cities = props.topCitiesData;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{countryName}</Text>
      </View>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>{cities[0].name}</Text>
      </View>
    </View>
  );
};

export default CountryResults;
