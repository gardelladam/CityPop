import { StyleSheet, StatusBar } from "react-native";

/**
 * Global styles that are reused in many files. Flex layout used to distribute the space.
 */

const globalStyles = StyleSheet.create({
  /** The outer container, fills the screen */
  appContainer: {
    width: "100%",
    height: "100%",
  },

  /** Top bar. Only visible in search and result screens but used in home screen for consistency */
  topBar: {
    marginTop: StatusBar.currentHeight + 10, // Margin to stay out of statusbar
    marginLeft: 10,
    flex: 1,
    width: "30%",
  },
  /** Container for everything below the top bar */
  container: {
    flex: 8,
  },

  /** Container for the title/titles  */
  titleContainer: {
    alignItems: "center",
    flex: 1,
  },
  /** Title styling */
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "rgba(30, 30, 30, 1)",
    width: "70%",
  },
  /** Subtitle styling */
  subtitle: {
    fontSize: 14,
    padding: 10,
    color: "black",
  },
  titleBackground: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    backgroundColor: "rgba(250, 250, 250, 0.75)",
  },
  /** Content on the screen (buttons, searchbar etc.) */
  content: {
    flex: 3,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default globalStyles;
