import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navigator from "./routes/Navigator.js";
import globalStyles from "./components/globalStyles";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
