import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { COLORS } from "../../globalStyles";

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
            backgroundColor: pressed ? COLORS.BUTTON_PRESSED : COLORS.BUTTON,
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
