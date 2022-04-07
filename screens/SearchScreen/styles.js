import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  placeHolder: {
    flex: 1,
    marginTop: "30%",
    alignItems: "center",
  },
  textContainer: {
    width: "90%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  loadingText: {
    top: 10,
    fontSize: 14,
  },
  loadingContainer: {
    width: "60%",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.6)",
    borderRadius: 10,
  },
  backButton: {
    width: "50%",
    padding: 5,
  },
});
export default styles;
