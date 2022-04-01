import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton.js";

const HomeScreen = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>CityPop</Text>
        <Text style={styles.subtitle}>
          See the population size in your favorite cities
        </Text>
      </View>

      <View style={styles.buttons}>
        <CustomButton
          title="SEARCH BY CITY"
          onPress={() => {
            console.log("City pressed");
          }}
        />
        <CustomButton
          title="SEARCH BY COUNTRY"
          onPress={() => {
            console.log("Country pressed");
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
