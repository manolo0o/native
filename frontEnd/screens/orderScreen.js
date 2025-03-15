import React from "react";
import { View, Text } from "react-native";
import orderScreenStyles from "../screenStyles/orderStyles.js";

//components
import NavBar from "../components/navBar.js";

export default function OrderScreen({ navigation }) {
    return (
      <View style={orderScreenStyles.container}>
        <Text>Order Screen</Text>
        <NavBar navigation={navigation}/>
      </View>
    );
}