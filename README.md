# About this project - CityPop

**Author: Adam Gardell**

This project is an app to search for cities and display their population. Countries can also be searched for to then select between the most populated cities in the country and display them. The app is created in React Native using Expo, https://expo.dev/. This README gives some important information about the project and how to clone it and start it up on your computer.

## Setting up the project

1. Start off by cloning this repository to a folder on your computer.
2. Make sure you have Node installed
3. In the terminal of the cloned project folder, run either:

```console
npm install -g expo-cli
```

or

```console
yarn global add expo-cli
```

to install Expo CLI (you might need admin rights).

4. Run either:

```console
(npm/yarn) install
```

to install dependencies.

5. Open the project folder in your text editor.

6. In the text editor project folder, go services/fetchData.js and change the const USERNAME to your username for the geonames API.

7. Run either:

```console
(npm/yarn/expo) start
```

to run an Expo development server.

8. Start an emulator/simulator and select run on emulator/simulator in the expo window or scan the QR code to run with the Expo GO app on your phone.

9. Try the app!

## Folder structure

The project files are split up between some folders. Each screen/component also has a folder of its own and a file for its styles. The folders are:

- Project folder - the outermost folder contains App.js which runs the rest of the app, globalStyles.js with common styles used in many files.

* screens folder - contains the screens of the app (Home, Search, City results and Country results).

* routes folder - contains a navigator that handles navigation between the screens.

* services folder - contains larger functions that are used in the app. At the moment it contains a function to fetch data from the API.

- components folder - contains components that are rendered on the screens or within each other.

- assets folder - contains images and icons
