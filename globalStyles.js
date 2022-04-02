import { StyleSheet, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 5,
  },
  topBar: {
    marginTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
  },
  content: {
    flex: 2,
  },
});

export default globalStyles;
