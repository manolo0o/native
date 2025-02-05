
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
      fontSize: 50,
      fontFamily: 'Montserrat_700Bold',
      textShadowColor: 'rgba(61, 61, 61, 0.65)',
      textShadowOffset: { height: 6 },
      textShadowRadius: 7,
    },
    textWhite: {
      color: 'white',
      fontSize: 43,
      fontFamily: 'Montserrat_700Bold', 
      textShadowColor: 'rgba(61, 61, 61, 0.65)',
      textShadowOffset: { height: 6 },
      textShadowRadius: 7,
    },
    description: {
      marginTop: 17,
      fontSize: 14.5,
      color: 'white',
      fontFamily: 'Montserrat_400Regular', 
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    ColumContainer: {
      flex: 1,
    },
    signIn: {
      marginTop: 20,
      alignItems: 'center',
      marginBottom: 20,
    },
    signInContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      width: 90,
      marginHorizontal: 13,
      opacity: 0.5, 
    },
    signInText:{
      color: 'white',
      fontSize: 15,
      fontFamily: 'Montserrat_400Regular', 
    },
    ButtonContainer: {
      flexDirection: 'row', // Place children side by side
      justifyContent: 'space-around', // Add space between buttons
      alignItems: 'flex-start' , 
      paddingHorizontal: 10, // Add horizontal padding
    },
    buttonFacebook: {
      width: 150,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 30,
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
      elevation: 10,
      shadowColor: 'rgb(255, 255, 255)',
    },
    buttonGoogle: {
      width: 150,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 30,
      flexDirection: 'row', // Align image and text side by side
      alignItems: 'center', // Center the content vertically
      elevation: 10,
      shadowColor: 'rgb(255, 255, 255)',
    },
    buttonText: {
      color: 'black',
      fontSize: 13.5,
      fontFamily: 'Montserrat_600SemiBold',
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
    StartContainer: {
      marginTop: 25,      
      flex: 1,
      alignItems: 'center',
    },
    startButton:{
      width: 330,
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.43)',
      padding: 18,
      borderRadius: 30,
      borderColor: 'white', // Add border color
      borderWidth: 1, // Add border width
    },
    startTextButton: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Montserrat_600SemiBold',
    },
    startText: {
      color: 'white',
      fontSize: 14,
      marginTop: 15,
      fontFamily: 'Montserrat_400Regular',
    },
    highlight: {
      fontFamily: 'Montserrat_600SemiBold',
      textDecorationLine: 'underline',
    },
  });

  export default welcomeStyles;