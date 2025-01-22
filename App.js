import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity , Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'CustomFont': require('./assets/fonts/Montserrat/static/Montserrat-Black.ttf'), // Adjust the path if needed
      });
      setFontsLoaded(true); // Set fontsLoaded to true once font is loaded
    } catch (error) {
      console.error('Error loading font:', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading Fonts...</Text>
      </View>
    ); // Show a loading screen if fonts are not yet loaded
  }

  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}
      >
      <View style={styles.textContainer}> 
        <View style={styles.content}>
          <Text style={styles.textBlack}>
            Welcome to
          </Text>
          <Text style={styles.textWhite}>
            DELIVERY
          </Text>
          <Text style={styles.textWhite}>
            HUB
          </Text>
          <Text style={styles.description}>
            Your favourite foods in less than 30 minutes!
          </Text>
        <StatusBar style="auto" />
        </View>
        <View style={styles.signIn}>
          <Text>sign in with</Text>
        </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.buttonFacebook}
              >
              <Text style={styles.buttonText}>
                FACEBOOK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.buttonGoogle}
              >
                <Text>GOOGLE</Text>
            </TouchableOpacity>
          </View>
      </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 200,
  },
  content: {
    width: 'auto',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textBlack: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'CustomFont', // Apply custom font
    textShadowColor: 'rgba(61, 61, 61, 0.65)',
    textShadowOffset: { height: 6 },
    textShadowRadius: 7,
  },
  textWhite: {
    color: 'white',
    fontSize: 47,
    fontWeight: 'bold',
    fontFamily: 'CustomFont', // Apply custom font
    textShadowColor: 'rgba(61, 61, 61, 0.65)',
    textShadowOffset: { height: 6 },
    textShadowRadius: 7,
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // Button Styles
  ButtonContainer:{
    flexDirection: 'row', // Place children side by side
    justifyContent: 'space-between', // Add space between buttons
    alignItems: 'center', // Align items vertically in the center
    marginTop: 10, // Add some margin at the top
    paddingHorizontal: 10, // Add horizontal padding
  },
  buttonFacebook : {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 15,
    width: 100,
  },
  buttonGoogle : {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
  },
});
