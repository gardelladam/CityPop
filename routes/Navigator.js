import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../screens/HomeScreen/HomeScreen.js";
import SearchScreen from "../screens/SearchScreen/SearchScreen.js";
import CityScreen from "../screens/CityScreen/CityScreen.js";
import CountryScreen from "../screens/CountryScreen/CountryScreen.js";

/**
 * Navigator that handles the routing between the different screens of the app using the React Navigation package
 */

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Set home screen to default
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Navigator;
