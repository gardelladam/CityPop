import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Pressable,
  Button,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS } from "../../globalStyles";
import SmallButton from "../SmallButton/SmallButton.js";

/**
 * SearchBar taken from https://blog.logrocket.com/create-react-native-search-bar-from-scratch/.
 * Added function to set submit to true when submitting and error message for invalid input
 */

const SearchBar = (props) => {
  const { toolTip, searchPhrase, setSearchPhrase, setSubmit } = props;

  const [clicked, setClicked] = useState(false); // Variable for changing style of search bar depending on clicked or not
  const [errorMessage, setErrorMessage] = useState(null); // Variable for

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
      //setClicked(false);
      setErrorMessage("Enter alphabetical characters");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(null);
    }

    return () => {};
  }, [searchPhrase]);

  return (
    <View>
      <View style={styles.errorMessage}>
        <Text
          style={[
            styles.errorText,
            errorMessage ? styles.errorBackground : null,
          ]}
        >
          {errorMessage}
        </Text>
      </View>
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
            maxLength={40}
            autoCorrect={false}
            onChangeText={setSearchPhrase}
            onSubmitEditing={() => submit()} // Submit search by setting submit state variable
            onFocus={() => {
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
                setErrorMessage(null);
              }}
            />
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View style={styles.cancelButton}>
            <SmallButton
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></SmallButton>
          </View>
        )}
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? COLORS.BUTTON_PRESSED : COLORS.BUTTON,
            },
            styles.searchButton,
          ]}
          onPress={() => submit()}
        >
          <Feather
            name="search"
            size={25}
            color="white"
            style={{ marginLeft: 1 }}
          />
        </Pressable>
      </View>
    </View>
  );
};
export default SearchBar;
