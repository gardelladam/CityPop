import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Navigator from "./routes/Navigator.js";
import globalStyles from "./globalStyles";
import CustomButton from "./components/CustomButton/CustomButton.js";

/**
 * App.js, returns the navigator found in Navigator.js
 */

export default function App() {
  return (
    <View style={globalStyles.appContainer}>
      <Navigator />
    </View>
  );
}
