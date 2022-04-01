import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";

const SearchScreen = (props) => {
  const type = props.type;
  return (
    <View style={styles.appContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>SearchScreen</Text>
      </View>
    </View>
  );
};

export default SearchScreen;
