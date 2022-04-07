import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import SmallButton from "../../components/SmallButton/SmallButton.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Screen to display result of a search by country.
 *  Receives the country as a data object and the cities with the largest population as an array of data objects.
 */

const CountryScreen = ({ route, navigation }) => {
  const { data, topCitiesData } = route.params;

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}>
        <SmallButton title="Home" onPress={() => navigation.popToTop()} />
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>{data.name}</Text>
        </View>
        <View style={globalStyles.content}>
          <View style={styles.center}>
            <View style={styles.backButton}>
              <SmallButton // Button to go back to search screen
                title="Back to search"
                onPress={() => {
                  navigation.navigate("Search", { type: 2 }); // Type 2 for country search
                }}
              />
            </View>
          </View>
          <FlatList // Display the top populated cities in a flatlist
            style={globalStyles.content2}
            keyExtractor={(item) => item.geonameId}
            data={topCitiesData}
            renderItem={({ item }) => (
              <CustomButton // Every element in the flatlist is a button navigating to city screen
                title={item.name}
                onPress={() => {
                  navigation.navigate("City", { data: item, redirected: true });
                }}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CountryScreen;
