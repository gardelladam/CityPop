import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./styles";

/**
 * SearchBar taken from https://blog.logrocket.com/create-react-native-search-bar-from-scratch/.
 * Added function to set submit to true when submitting
 */

const SearchBar = (props) => {
  const {
    toolTip,
    clicked,
    searchPhrase,
    setSearchPhrase,
    setClicked,
    submit,
    setSubmit,
  } = props;

  return (
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
          onSubmitEditing={() => setSubmit(true)} // Submit search by setting submit state variable
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
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;
