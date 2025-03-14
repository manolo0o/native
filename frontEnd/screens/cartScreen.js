import React from "react";
import { View, Text } from "react-native";
import cartScreenStyles from "../screenStyles/cartStyles.js";

//components

export default function CartScreen() {
    return (
      <View style={cartScreenStyles.container}>
        <Text>Cart Screen</Text>
      </View>
    );
}