import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const CustomButton = (props) => {
  const { title, onPress, navigation } = props;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => onPress()}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
