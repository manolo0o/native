import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import signInStyles from '../styles/signInStyles.js';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    return (
      <ImageBackground
        source={require('../assets/Rectangle 4170.png')}
        style={signInStyles.background}
        resizeMode="cover"
      >
        <View style={signInStyles.overlay} />
        <View style={signInStyles.containerLogin}>
          <Text style={signInStyles.title}>Login</Text>
          
          {!email && <Text style={signInStyles.inputReference}>E-mail</Text>}
          <TextInput
            style={[
              signInStyles.input,
              isEmailFocused && signInStyles.inputFocused,
            ]}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          >
          </TextInput>

          {!password && <Text style={signInStyles.inputReference}>Password</Text>}
          <TextInput
            style={[
              signInStyles.input,
              isPasswordFocused && signInStyles.inputFocused,
            ]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          >
          </TextInput>
          <TouchableOpacity style={signInStyles.loginButton}> 
            <Text style={signInStyles.loginButtonText}> 
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}