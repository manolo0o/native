
import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 200,
    },
    textBlack: {
      fontSize: 55,
      fontWeight: 'bold',
      fontFamily: 'CustomFont', // Apply custom font
      textShadowColor: 'rgba(61, 61, 61, 0.65)',
      textShadowOffset: { height: 6 },
      textShadowRadius: 7,
    },
    textWhite: {
      color: 'white',
      fontSize: 47,
      fontWeight: 'bold',
      fontFamily: 'CustomFont', // Apply custom font
      textShadowColor: 'rgba(61, 61, 61, 0.65)',
      textShadowOffset: { height: 6 },
      textShadowRadius: 7,
    },
    description: {
      marginTop: 15,
      fontSize: 16,
      color: 'white',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signIn: {
      marginTop: 20,
      alignItems: 'center',
      marginBottom: 10,
    },
    signInText:{
      color: 'white',
      fontSize: 15,
    },
    ButtonContainer: {
      flex: 1,
      flexDirection: 'row', // Place children side by side
      justifyContent: 'space-around', // Add space between buttons
      alignItems: 'flex-start' , 
      marginTop: 10, // Add some margin at the top
      paddingHorizontal: 10, // Add horizontal padding
    },
    buttonFacebook: {
      width: 150,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 30,
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
    },
    buttonGoogle: {
      width: 150,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 30,
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
    facebookIcon: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
    googleIcon: {
      width: 30,
      height: 30,
      marginRight: 8,
    },
  });

  export default welcomeStyles;