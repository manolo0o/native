import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import signInStyles from '../Styles/signInStyles.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL_NEW } from '@env';

//components
import CustomAlert from '../components/customAlert.js';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL_NEW}/auth/login`, {
        email,
        password
      });

      const { token, user } = res.data;

      // Guardamos token y datos del usuario
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(user));

      setAlertMessage(`Hola ${user.name}`);
      setAlertVisible(true);
    } catch (error) {
      console.error('❌ Error en login:', error.response?.data || error.message);
      setAlertMessage(error.response?.data?.message || 'Credenciales incorrectas');
      setAlertVisible(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Rectangle 4170.png')}
      style={signInStyles.background}
      resizeMode="cover"
    >
      <View style={signInStyles.overlay} />
      <View style={signInStyles.containerLogin}>
        <Text style={signInStyles.title}>Login</Text>

        <Text style={signInStyles.inputReference}>E-mail</Text>
        <TextInput
          style={[
            signInStyles.input,
            isEmailFocused && signInStyles.inputFocused,
          ]}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          autoCapitalize="none"
          keyboardType="email-address"
          selectionColor="gray"
        />

        <Text style={signInStyles.inputReference}>Password</Text>
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
          selectionColor="gray"
        />

        <View style={signInStyles.ButtonContainer}>
          <Text style={signInStyles.forgtPwd}>Forgot password?</Text>

          <TouchableOpacity style={signInStyles.loginButton} onPress={handleLogin}>
            <Text style={signInStyles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={signInStyles.signUp}>
            Don't have an account?
            <Text
              style={signInStyles.signUpOrange}
              onPress={() => navigation.navigate('SignUp')}
            >
              {' '}Sign up
            </Text>
          </Text>
        </View>
      </View>
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => {
          setAlertVisible(false);
          if (alertMessage.startsWith('Hola')) {
            navigation.navigate('Home');
          }
        }}
      />
    </ImageBackground>
    
  );
}
