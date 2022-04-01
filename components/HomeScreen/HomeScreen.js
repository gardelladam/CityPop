import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton.js";

const HomeScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>CityPop</Text>
        <Text style={styles.subtitle}>
          See the population size in your favorite cities
        </Text>
      </View>

      <View style={styles.buttons}>
        <CustomButton title="SEARCH BY CITY" onPress={pressHandler} />
        <CustomButton title="SEARCH BY COUNTRY" onPress={pressHandler} />
      </View>
    </View>
  );
};

export default HomeScreen;
