import React from "react";
import { View, Text } from "react-native";
import orderScreenStyles from "../screenStyles/orderStyles.js";

export default function OrderScreen() {
    return (
      <View style={orderScreenStyles.container}>
        <Text>Order Screen</Text>
      </View>
    );
}