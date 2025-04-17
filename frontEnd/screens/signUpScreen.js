import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { API_URL_NEW } from '@env'; 
import signUpStyles from '../Styles/signUpStyles.js';

//components
import CustomAlert from '../components/customAlert.js';

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [istFullNameFocused, setIsFullNameFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${API_URL_NEW}/auth/register`, {
        name: fullName,
        email,
        password,
      });

      Alert.alert('Registro exitoso', '¡Ya puedes iniciar sesión!', [
        { text: 'OK', onPress: () => navigation.navigate('SignIn') },
      ]);
    } catch (error) {
      console.error('❌ Error al registrar:', error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'No se pudo registrar');
    }
  };

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
          style={[signUpStyles.input, istFullNameFocused && signUpStyles.inputFocused]}
          value={fullName}
          onChangeText={setFullName}
          onFocus={() => setIsFullNameFocused(true)}
          onBlur={() => setIsFullNameFocused(false)}
          selectionColor="gray"
        />

        <Text style={signUpStyles.inputReference}> E-mail </Text>
        <TextInput
          style={[signUpStyles.input, isEmailFocused && signUpStyles.inputFocused]}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          selectionColor="gray"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={signUpStyles.inputReference}> Password </Text>
        <TextInput
          style={[signUpStyles.input, isPasswordFocused && signUpStyles.inputFocused]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          selectionColor="gray"
        />

        <View style={signUpStyles.ButtonContainer}>
          <TouchableOpacity style={signUpStyles.signUpButton} onPress={handleSignUp}>
            <Text style={signUpStyles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={signUpStyles.loginRedirection}>
            Already have an account?
            <Text style={signUpStyles.orangeText} onPress={() => navigation.navigate('SignIn')}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
