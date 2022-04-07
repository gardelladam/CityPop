import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../../globalStyles";

/**
 * Home screen of the app. Contains titles and two buttons redirecting to the search screen
 */

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <View style={globalStyles.topBar}></View>
      <View style={globalStyles.container}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title}>CityPop</Text>
          <View style={globalStyles.titleBackground}>
            <Text style={globalStyles.subtitle}>
              See the population size in your favorite cities
            </Text>
          </View>
        </View>

        <View style={globalStyles.content}>
          <CustomButton
            title="SEARCH BY CITY"
            onPress={() => navigation.navigate("Search", { type: 1 })} // Navigate to search page and pass type: 1 (City)
          />
          <CustomButton
            title="SEARCH BY COUNTRY"
            onPress={() => navigation.navigate("Search", { type: 2 })} // Navigate to search page and pass type: 2 (Country)
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
