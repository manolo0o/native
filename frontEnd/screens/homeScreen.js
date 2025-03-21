import React from "react";
import { View, Text } from "react-native";
import homeScreenStyles from "../screenStyles/homeStyles.js";

// components
import NavBar from "../components/navBar.js";
import UserHeader from "../components/userHeader.js";
import Finder from "../components/finder.js";
import CategoriesSlider from "../components/categories_Slider.js";

export default function HomeScreen({ navigation }) {
    return (
      <View style={homeScreenStyles.container}>
        <UserHeader />
        <Finder />
        <CategoriesSlider />
        <NavBar navigation={navigation}/>  
      </View>
    );
}