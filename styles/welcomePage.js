
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
    content: {
      width: 'auto',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
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
    },
    ButtonContainer: {
      flexDirection: 'row', // Place children side by side
      justifyContent: 'space-between', // Add space between buttons
      alignItems: 'center', // Align items vertically in the center
      marginTop: 10, // Add some margin at the top
      paddingHorizontal: 10, // Add horizontal padding
    },
    buttonFacebook: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginRight: 10, // Add some margin between buttons
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
    },
    buttonGoogle: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
    },
    buttonImage: {
      width: 20,
      height: 20,
      marginRight: 10, // Add some margin between image and text
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
    facebookIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
  
  });

  export default welcomeStyles;