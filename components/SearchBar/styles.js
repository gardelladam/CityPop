import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelButton: { left: 10 },
  searchButton: {
    alignSelf: "center",
    padding: 15,
    borderRadius: 1000,
    backgroundColor: "rgba(100, 100, 100, 0.8)",
  },
  errorMessage: {
    height: 30,
    alignItems: "center",
  },
  errorText: {
    padding: 1,
    color: "white",
  },
  errorBackground: { backgroundColor: "rgba(219, 20, 20, 1)" },
});

export default styles;
