import React from 'react';
import { Text, View, ImageBackground, TextInput} from 'react-native';
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
          <Text>Login</Text>
          
          <Text>E-mail</Text>
          <TextInput
            style={signInStyles.input}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
          >
          </TextInput>

          <Text>Password</Text>
          <TextInput
            style={signInStyles.input}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            >
          </TextInput>
            
        </View>
      </ImageBackground>
    );
}