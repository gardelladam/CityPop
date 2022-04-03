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
  /** Top bar. Only visible in search screen but used in home screen for consistency */
  topBar: {
    marginTop: StatusBar.currentHeight + 10, // Margin to stay out of statusbar
    flex: 1,
  },
  /** Container for everything below the top bar */
  container: {
    flex: 5,
  },

  /** Container for the title/titles  */
  titleContainer: {
    alignItems: "center",
    flex: 1,
  },
  /** Title styling */
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  /** Subtitle styling */
  subtitle: {
    fontSize: 14,
  },
  /** Content on the screen (buttons, searchbar etc.) */
  content: {
    flex: 2,
  },
});

export default globalStyles;
