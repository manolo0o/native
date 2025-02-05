import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle, withSequence } from 'react-native-reanimated';

export default function SplashScreen({ navigation }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    // Fade in animation
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });

    // Scale animation
    scale.value = withSequence(
      withTiming(1.1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );

    // Fade out animation before navigating to Welcome screen
    const timer = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });

      // Navigate to Welcome screen after fade-out animation
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={require('../assets/icons/lineicons--burger-drink.png')}
          style={styles.SplashImage}>
        </Image>
        <Text style={styles.logoText}>DELIVERY</Text>
        <Text style={styles.logoText}>HUB</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FE8000',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
  },
  SplashImage: {
    width: 200,
    height: 200,
  },
});