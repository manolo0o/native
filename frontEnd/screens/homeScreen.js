import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import NavBar from "../components/navBar.js";
import UserHeader from "../components/userHeader.js";
import Finder from "../components/finder.js";
import CategoriesSlider from "../components/categories_Slider.js";
import PopularItemsSlider from "../components/popularItems_Slider.js";

export default function HomeScreen({ navigation }) {
    return (
      <View style={homeScreenStyles.container}>

        <View style={homeScreenStyles.contentContainer}>
          <UserHeader />
          <Text style={homeScreenStyles.welcomeText}>
          What would you like
          to order?
          </Text>
          <Finder />
          <CategoriesSlider />
          <PopularItemsSlider  navigation={navigation}/>
        </View>
      
        <NavBar navigation={navigation}/>  
      </View>
    );
}

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This will push the NavBar to the bottom
    backgroundColor: '#fff',
  },
  welcomeText:{
    fontSize: 25,
    width: '80%',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 20,
    marginLeft: 25,
  },
})