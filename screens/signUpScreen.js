import React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import signUpStyles from '../styles/signUpStyles.js';

export default function SignUpScreen ({ navigation }) {
  
    return (
      <ImageBackground
        source={require('../assets/Rectangle 4170.png')}
        style={signUpStyles.background}
        resizeMode="cover"
      >
        <View style={signUpStyles.overlay} />
        <View style={signUpStyles.containerSignUp}>
          <Text>Sign Up</Text>
        </View>
      </ImageBackground>
    );
}