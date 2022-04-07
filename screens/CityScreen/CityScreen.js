import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import CityInfo from "../../components/CityInfo/CityInfo.js";

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
          <CustomButton title="Home" onPress={() => navigation.popToTop()} />
        </View>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>{data.name}</Text>
        </View>
        <View style={globalStyles.content}>
          <CityInfo population={data.population} />
        </View>
      </View>
    </View>
  );
};

export default CityScreen;
