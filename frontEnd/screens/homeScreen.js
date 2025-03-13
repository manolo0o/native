import React from "react";
import { View, Text } from "react-native";
import homeScreenStyles from "../screenStyles/homeStyles.js";

// cmpnents
import NavBar from "../components/navBar.js";
import UserHeader from "../components/userHeader.js";

export default function HomeScreen() {
    return (
      <View style={homeScreenStyles.container}>
        <UserHeader />
        <Text>What would you like
        to order</Text>
        <NavBar />  
      </View>
    );
}