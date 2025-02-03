import React from 'react';
import { Text, View } from 'react-native';
import signInStyles from '../styles/signInStyles.js';

export default function SignInScreen() {
    return (
        <View style={signInStyles.container}>
          <Text>Sign In Screen</Text>
        </View>
    );
}