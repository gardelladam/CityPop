import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../screens/HomeScreen/HomeScreen.js";
import SearchScreen from "../screens/SearchScreen/SearchScreen.js";
import CityScreen from "../screens/CityScreen/CityScreen.js";
import CountryScreen from "../screens/CountryScreen/CountryScreen.js";
import globalStyles from "../globalStyles";

/**
 * Navigator that handles the routing between the different screens of the app using the React Navigation package
 */

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Navigator = () => {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={globalStyles.image}
    >
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          initialRouteName="Home" // Set home screen to default
          screenOptions={{
            headerShown: false,
            animation: "none", // Disable animations when navigating
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            presentation="transparentModal"
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="City" component={CityScreen} />
          <Stack.Screen name="Country" component={CountryScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ImageBackground>
  );
};

export default Navigator;
