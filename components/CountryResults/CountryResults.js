import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Component to display result of a search by country.
 *  Receives the country as a data object and the cities with the largest population as an array of data objects.
 */

const CountryResults = (props) => {
  const { setCityData, setType, countryName, topCitiesData } = props;

  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCity !== null) {
      setCityData(selectedCity).finally(() => setType(1));
    }
  }, [selectedCity]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>{countryName}</Text>
      </View>
      <View style={globalStyles.content}>
        <FlatList
          style={globalStyles.content2}
          keyExtractor={(item) => item.geonameId}
          data={topCitiesData}
          renderItem={({ item }) => (
            <CustomButton
              title={item.name}
              onPress={() => {
                setSelectedCity(item);
              }} // Navigate to search page and pass type: 2 (Country)
            />
          )}
        />
      </View>
    </View>
  );
};

export default CountryResults;
