import React, { useState } from "react";
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import turnbackIcon from '../assets/icons/turnBack.png'; // Import turnBack icon

//components
import NavBar from "../components/navBar.js";

const DoubleButton = ({ activeTab, setActiveTab }) => {
    const animation = new Animated.Value(activeTab === "Upcoming" ? 0 : 1);

    const toggleTab = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
            Animated.timing(animation, {
                toValue: tab === "Upcoming" ? 0 : 1,
                duration: 300, // Reduced duration for quicker animation
                easing: Easing.linear, // Changed to linear easing for Android compatibility
                useNativeDriver: false,
            }).start();
        }
    };

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150], // Adjusted for increased button width
    });

    return (
        <View style={orderScreenStyles.doubleButtonContainer}>
            <Animated.View
                style={[
                    orderScreenStyles.activeBackground,
                    { transform: [{ translateX }] },
                ]}
            />
            <TouchableOpacity
                style={orderScreenStyles.button}
                onPress={() => toggleTab("Upcoming")}
            >
                <Text
                    style={[
                        orderScreenStyles.buttonText,
                        activeTab === "Upcoming" && orderScreenStyles.activeText,
                    ]}
                >
                    Upcoming
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={orderScreenStyles.button}
                onPress={() => toggleTab("History")}
            >
                <Text
                    style={[
                        orderScreenStyles.buttonText,
                        activeTab === "History" && orderScreenStyles.activeText,
                    ]}
                >
                    History
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default function OrderScreen({ navigation }) {
    const [activeTab, setActiveTab] = useState("Upcoming");

    return (
      <View style={orderScreenStyles.container}>
        <View style={orderScreenStyles.HeaderTurnBack}>
          <TouchableOpacity 
            style={orderScreenStyles.turnBackButton} 
            onPress={() => navigation.goBack()}
          >
            <Image 
              style={orderScreenStyles.turnBackIcon} 
              source={turnbackIcon} 
            />
          </TouchableOpacity>
          <View style={orderScreenStyles.headerTextContainer}>
            <Text style={orderScreenStyles.headerText}>My Orders</Text>
          </View>
        </View>

        {/* Double Button */}
        <DoubleButton activeTab={activeTab} setActiveTab={setActiveTab} />

        <NavBar navigation={navigation}/>
      </View>
    );
}

const orderScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This will push the NavBar to the bottom
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  HeaderTurnBack: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  turnBackButton: {
    width: 70,
    height: 70,
    marginLeft: 15,
    marginRight: 90,
  },
  turnBackIcon: {
    top: 7,
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {},
  headerText: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
  },
  doubleButtonContainer: {
    flexDirection: 'row',
    position: 'relative',
    width: 300, // Increased width
    height: 60, // Increased height
    backgroundColor: '#fff', // Set background to white
    borderRadius: 30, // Adjusted for new height
    overflow: 'hidden',
    borderWidth: 1, // Added border width
    borderColor: 'rgba(128, 128, 128, 0.26)', // Added opacity to border color
  },
  activeBackground: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#FE8000',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 30, // Adjusted for new height
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16, // Increased font size
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FE8000',
  },
  activeText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
  },
})