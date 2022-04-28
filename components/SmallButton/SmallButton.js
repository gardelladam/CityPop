import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

/**
 *  Custom button component. Receives a title prop and an onPress prop
 */
const SmallButton = (props) => {
  const { title, onPress } = props;

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgba(90, 90, 90, 0.9)"
              : "rgba(100, 100, 100, 0.8)",
          },
          styles.button,
        ]}
        onPress={() => onPress()}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default SmallButton;
