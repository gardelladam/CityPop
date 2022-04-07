import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Component to display result of a search by country.
 *  Receives the country as a data object and the cities with the largest population as an array of data objects.
 */

const CountryScreen = ({ route, navigation }) => {
  const { data, topCitiesData } = route.params;

  return (
    <View style={globalStyles.appContainer}>
      <View style={globalStyles.container}>
        <View style={globalStyles.topBar}>
          <CustomButton title="Back" onPress={() => navigation.popToTop()} />
        </View>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>{data.name}</Text>
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
                  navigation.navigate("City", { data: item });
                }}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CountryScreen;
