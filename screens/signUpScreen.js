import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import signUpStyles from '../styles/signUpStyles.js';

export default function SignUpScreen ({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [ istFullNameFocused, setIsFullNameFocused ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ isEmailFocused, setIsEmailFocused ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ isPasswordFocused, setIsPasswordFocused ] = useState(false);   

  return (
      <ImageBackground
        source={require('../assets/Rectangle 4170.png')}
        style={signUpStyles.background}
        resizeMode="cover"
      >
        <View style={signUpStyles.overlay} />
        <View style={signUpStyles.containerSignUp}>
          <Text style={signUpStyles.title}> Sign Up </Text>

            <Text style={signUpStyles.inputReference}> Full Name </Text>
              <TextInput
                style={[
                  signUpStyles.input,
                  istFullNameFocused && signUpStyles.inputFocused,
                ]}
                value={fullName}
                onChangeText={setFullName}
                onFocus={() => setIsFullNameFocused(true)}
                onBlur={() => setIsFullNameFocused(false)}
              >
              </TextInput>
            
            <Text style={signUpStyles.inputReference}> E-mail </Text>
              <TextInput
                style={[
                  signUpStyles.input,
                  isEmailFocused && signUpStyles.inputFocused,
                ]}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}>
                  
                </TextInput>
            
            <Text style={signUpStyles.inputReference}> Password </Text>
              <TextInput
                style={[
                  signUpStyles.input,
                  isPasswordFocused && signUpStyles.inputFocused,
                ]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              >
              </TextInput>
              <View style={signUpStyles.ButtonContainer}>
                  <TouchableOpacity style={signUpStyles.signUpButton}>
                    <Text style={signUpStyles.signUpButtonText}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                  <Text style={signUpStyles.loginRedirection}>
                    Already have an account?
                    <Text 
                      style={signUpStyles.orangeText}
                      onPress={() => navigation.navigate('SignIn')}
                    > Login </Text>
                  </Text>
              </View>
        </View>
      </ImageBackground>
    );
}