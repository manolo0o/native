import React from "react";
import { View, Text } from "react-native";
import homeScreenStyles from "../styles/homeScreenStyles.js";

// cmpnents
import NavBar from "../components/navBar.js";

export default function HomeScreen() {
    return (
      <View style={homeScreenStyles.container}>
        <Text>Home Screen</Text>
        <NavBar />  
      </View>
    );
}