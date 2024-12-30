import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.background}
      resizeMode='cover'
    >
    <View style={styles.textContainer}>
      <View style={styles.content}>
        <Text style={styles.textBlack}>
          Welcome to 
        </Text>
        <Text style={styles.textWhite}> 
          DELIVERY 
        </Text>
        <Text style={styles.textWhite}> 
          HUB 
        </Text>
        <Text style={styles.description}> 
          Your favourite foods in less than 30 minutes! 
        </Text>
          <StatusBar style="auto" />
      </View>
    </View>
  
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 200
  },
  content: {
    width: 'auto',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textBlack:{
    fontSize: 55,
    fontWeight: 'bold',
    textShadowColor: 'rgba(61, 61, 61, 0.65)',
    textShadowOffset: { height: 6 },
    textShadowRadius: 7,
  },
  textWhite:{
    color: 'white',
    fontSize: 47,
    fontWeight: 'bold',
    textShadowColor: 'rgba(61, 61, 61, 0.65)',
    textShadowOffset: { height: 6 },
    textShadowRadius: 7,
  },
  description:{
    marginTop: 15 ,
    fontSize: 16,
    color: 'white'
  }
});
