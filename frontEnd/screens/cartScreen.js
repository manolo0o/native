import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// components
import turnbackIcon from '../assets/icons/turnBack.png'; // Import the turnback icon
import NavBar from "../components/navBar.js";

export default function CartScreen({ navigation }) {
    return (
      <View style={cartScreenStyles.container}>
        <View style={cartScreenStyles.HeaderTurnBack}>
          {/* Turn Back Button */}
          <TouchableOpacity 
            style={cartScreenStyles.turnBackButton} 
            onPress={() => navigation.goBack()} // Navigate back to the previous screen
          >
            <Image 
              style={cartScreenStyles.turnBackIcon} 
              source={turnbackIcon} 
            />
          </TouchableOpacity>

          {/* Cart Text */}
          <View style={cartScreenStyles.cartTextContainer}>
            <Text style={cartScreenStyles.cartText}>Cart</Text>
          </View>

        </View>

        <NavBar navigation={navigation}/>
      </View>
    );
}

const cartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Push the NavBar to the bottom
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  HeaderTurnBack: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Vertically center the items
    width: '100%',
    marginTop: 20, // Add more margin to the top
  },
  turnBackButton: {
    width: 70, // Increase the size of the button
    height: 70,
    marginLeft: 15, 
    marginRight: 90, // Add some space between the icon and text
  },
  turnBackIcon: {
    top: 7, // Adjust the vertical position of the icon
    width: '100%', // Increase the size of the icon
    height: '100%',
  },
  cartTextContainer: {
  },
  cartText: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
  },
});

