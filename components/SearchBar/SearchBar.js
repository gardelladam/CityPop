import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Button,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import SmallButton from "../SmallButton/SmallButton.js";

/**
 * SearchBar taken from https://blog.logrocket.com/create-react-native-search-bar-from-scratch/.
 * Added function to set submit to true when submitting
 */

const SearchBar = (props) => {
  const { toolTip, searchPhrase, setSearchPhrase, setSubmit } = props;

  const [clicked, setClicked] = useState(false); // Variable for changing style of search bar depending on clicked or not
  const [errorMessage, setErrorMessage] = useState(""); // Variable for

  // Check if valid characters in string
  const isLetter = (str) => {
    var cleanStr = str.trim(); // Trim space in beginning and end
    return cleanStr.match(/^[a-z åäö]+$/i); // Compare with valid characters
  };

  // Only submit searches with valid characters
  const submit = () => {
    if (isLetter(searchPhrase)) {
      setSubmit(true);
    } else {
      setClicked(false);
      setErrorMessage("Enter alphabetical characters");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder={toolTip}
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onSubmitEditing={() => submit()} // Submit search by setting submit state variable
            onFocus={() => {
              setErrorMessage("");
              setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                setSearchPhrase("");
              }}
            />
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View style={styles.button}>
            <SmallButton
              title="Cancel"
              color="rgba(100, 100, 100, 0.8)"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></SmallButton>
          </View>
        )}
      </View>
      <View style={styles.errorMessage}>
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      </View>
    </View>
  );
};
export default SearchBar;
