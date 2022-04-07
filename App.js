import { StyleSheet, View } from "react-native";
import Navigator from "./routes/Navigator.js";
import globalStyles from "./globalStyles";

/**
 * App.js, returns the navigator found in routes/Navigator.js
 */

export default function App() {
  return (
    <View style={globalStyles.appContainer}>
      <Navigator />
    </View>
  );
}
