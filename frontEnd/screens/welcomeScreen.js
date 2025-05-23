import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useFonts , Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold,  } from '@expo-google-fonts/montserrat';
import welcomeStyles from '../Styles/welcomeStyles.js';

export default function WelcomeScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

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

          <View style={welcomeStyles.signInContainer}>
            <View style={welcomeStyles.line}></View>
              <View style={welcomeStyles.signIn}>
                <Text style={welcomeStyles.signInText} >sign in with</Text>
              </View>
            <View style={welcomeStyles.line}></View>
          </View>

          {/* Buttons Container */}
          <View style={welcomeStyles.ButtonContainer}>
          {/* Facebook button */}
            <TouchableOpacity style={welcomeStyles.buttonFacebook}>
              <Image
                source={require('../assets/icons/logos--facebook.png')}
                style={welcomeStyles.facebookIcon}>
              </Image>
              <Text style={welcomeStyles.buttonText}> FACEBOOK </Text>
            </TouchableOpacity>
          {/* Google button */} 
            <TouchableOpacity style={welcomeStyles.buttonGoogle}>
              <Image 
                source={require('../assets/icons/flat-color-icons--google.png')}
                style={welcomeStyles.googleIcon}>
              </Image>
              <Text style={welcomeStyles.buttonText}> GOOGLE </Text>
            </TouchableOpacity>
          </View>

          <View style={welcomeStyles.StartContainer}>
            
            <TouchableOpacity 
              style={welcomeStyles.startButton}
              onPress={() => navigation.navigate('SignUp')}
              >
              <Text style={welcomeStyles.startTextButton}>Start with email or phone</Text>
            </TouchableOpacity>
            
            <Text style={welcomeStyles.startText}>
              Already have an account?  
              
              <Text 
                style={welcomeStyles.highlight}
                onPress={() => navigation.navigate('SignIn')}
              >
                Sign In
              </Text>
            </Text>

          </View>

        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

