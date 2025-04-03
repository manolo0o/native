import React from "react";
import { View, Text } from "react-native";
import productScreenStyles from "../Styles/productScreenStyles.js";

// components

export default function ProductScreen({ navigation }) {
    return (
      <View style={productScreenStyles.container}>
        <Text>Product Screen</Text>
      </View>
    );
}