import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import SmallButton from "../../components/SmallButton/SmallButton.js";
import CityInfo from "../../components/CityInfo/CityInfo.js";

/**
 * Component to display result of a search by city.
 *  Receives the city as a data object and destructures the name and population.
 */

const CityScreen = ({ route, navigation }) => {
  const { data, redirected = false } = route.params; // City data from search screen and boolean to check if redirected from country

  const renderButton = () => {
    if (redirected === true) {
      return (
        <SmallButton
          title={`Back to ${data.countryName}`}
          onPress={() => {
            navigation.pop();
          }}
        />
      );
    }
  };
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
          <View style={styles.buttons}>
            <View style={styles.backButton}>
              <SmallButton
                title="Back to search"
                onPress={() => {
                  navigation.navigate("Search", { type: 1 });
                }}
              />
            </View>
            <View style={styles.countryButton}>{renderButton()}</View>
          </View>
          <View style={styles.center}>
            <CityInfo population={data.population} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CityScreen;
