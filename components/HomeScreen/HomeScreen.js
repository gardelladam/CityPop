import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton.js";
import styles from "./styles";
import globalStyles from "../globalStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.appContainer}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>CityPop</Text>
        <Text style={globalStyles.subtitle}>
          See the population size in your favorite cities
        </Text>
      </View>

      <View style={styles.buttons}>
        <CustomButton
          title="SEARCH BY CITY"
          onPress={() => navigation.navigate("Search", { type: 1 })}
        />
        <CustomButton
          title="SEARCH BY COUNTRY"
          onPress={() => navigation.navigate("Search", { type: 2 })}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
