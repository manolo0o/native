import React from "react";
import { View, Text } from "react-native";
import cartScreenStyles from "../Styles/cartStyles.js";

//components
import NavBar from "../components/navBar.js";

export default function CartScreen({ navigation }) {
    return (
      <View style={cartScreenStyles.container}>
        <Text>Cart Screen</Text>
        <NavBar navigation={navigation}/>
      </View>
    );
}