import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import NumberFormat from "react-number-format";

/**
 *  Container that displays info about city population
 */
const CityInfo = (props) => {
  const { population } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Population</Text>
      <Text style={styles.title}>
        {
          <NumberFormat
            value={population}
            displayType={"text"}
            thousandSeparator={" "}
            renderText={(formattedValue) => <Text>{formattedValue}</Text>}
          />
        }
      </Text>
    </View>
  );
};

export default CityInfo;
