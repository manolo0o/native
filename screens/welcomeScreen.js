import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import welcomeStyles from '../styles/welcomeStyles.js';

export default function WelcomeScreen({ navigation }) {

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={welcomeStyles.background}
      resizeMode="cover">
      
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 1)']}
        style={welcomeStyles.gradient}>

        <View style={welcomeStyles.textContainer}> 
            <Text style={welcomeStyles.textBlack}> Welcome to </Text>
            <Text style={welcomeStyles.textWhite}> DELIVERY </Text>
            <Text style={welcomeStyles.textWhite}> HUB </Text>
            <Text style={welcomeStyles.description}> Your favourite foods in less than 30 minutes! </Text>
        </View>
        <View style={welcomeStyles.ColumContainer}>

          <View style={welcomeStyles.signIn}>
            <Text style={welcomeStyles.signInText} >sign in with</Text>
          </View>
      
          {/* Buttons Container */}
          <View style={welcomeStyles.ButtonContainer}>
          {/* Facebook button */}
            <TouchableOpacity style={welcomeStyles.buttonFacebook}>
              <Image
                source={require('../assets/icons/facebookIcon.png')}
                style={welcomeStyles.facebookIcon}>
              </Image>
              <Text style={welcomeStyles.buttonText}> FACEBOOK </Text>
            </TouchableOpacity>
          {/* Google button */} 
            <TouchableOpacity style={welcomeStyles.buttonGoogle}>
              <Image 
                source={require('../assets/icons/googleIcon.png')}
                style={welcomeStyles.googleIcon}>
              </Image>
              <Text style={welcomeStyles.buttonText}> GOOGLE </Text>
            </TouchableOpacity>
          </View>

          <View style={welcomeStyles.StartContainer}>
            <TouchableOpacity style={welcomeStyles.startButton}>
              <Text style={welcomeStyles.startTextButton}>Start with email or phone</Text>
            </TouchableOpacity>
            <Text style={welcomeStyles.startText}>
              Already have an account? 
              <Text 
                style={welcomeStyles.highlight}
                onPress={() => navigation.navigate('SignIn')}
                > Sign In
              </Text>
            </Text>  
          </View>

        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

