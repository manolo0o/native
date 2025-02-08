import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/splashScreen';
import WelcomeScreen from './screens/welcomeScreen';
import SignUpScreen from './screens/signUpScreen';
import SignInScreen from './screens/signInScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        
        <Stack.Screen 
          name="Splash"  
          component={SplashScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Welcome"  
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignUp"  
          component={SignUpScreen} 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="SignIn"  
          component={SignInScreen} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

