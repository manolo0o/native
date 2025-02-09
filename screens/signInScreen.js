import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import signInStyles from '../styles/signInStyles.js';

export default function SignInScreen() {
    return (
      <ImageBackground
        source={require('../assets/Rectangle 4170.png')}
        style={signInStyles.background}
        resizeMode="cover"
      >
        <View style={signInStyles.overlay} />
        <View style={signInStyles.container}>
          <Text>Sign In Screen</Text>
          <TextInput
            style={signInStyles.input}
            placeholder="Username"
            placeholderTextColor="#FFFFFF"
          >
            
          </TextInput>
        </View>
      </ImageBackground>
    );
}