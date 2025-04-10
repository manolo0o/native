import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './components/splashScreen';
import CartScreen from './screens/cartScreen';
import HomeScreen from './screens/homeScreen';
import OrderScreen from './screens/orderScreen';
import ProductScreen from './screens/productScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import WelcomeScreen from './screens/welcomeScreen';

import { CartProvider } from './context/CartContext'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider> 
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
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

