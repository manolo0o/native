import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcomeScreen';
import SignInScreen from './screens/signInScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        
        <Stack.Screen 
          name="Welcome"  
          component={WelcomeScreen} 
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

