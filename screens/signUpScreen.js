import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import signUpStyles from '../styles/signUpStyles.js';

const SignUpScreen = () => {
    return (
      <ImageBackground
        source={require('../assets/Rectangle 4170.png')}
        style={signUpStyles.backgrodund}
        resizeMode="cover"
      >
        
        <View style={signUpStyles.container}>
          <Text>Sign Up Screen</Text>
        </View>
      </ImageBackground>
    );
}
export default SignUpScreen;