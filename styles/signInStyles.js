import { StyleSheet } from 'react-native';

const signInStyles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
    },
    containerLogin: {
      flex: 1,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'start',
    },
    title: {
      fontSize: 40,
      color: 'Black',
      fontFamily: 'Montserrat_700Bold',
      marginBottom: 20,
    },
    inputReference:{
      color: 'Black',
      opacity: 0.4,
      fontFamily: 'Montserrat_700bold',
      marginBottom: 5,
      fontSize: 17,
    },
    input:{
      width: '100%',
      height: 60,
      marginBottom: 20,
      borderRadius: 12,
      borderWidth: .2,
      borderColor: 'gray',
      backgroundColor: 'white',
    },
    inputFocused: {
      borderColor: 'gray', // Change border color when focused
      borderWidth: 1,
    },
    loginButton: {
      width: '100%',
      height: 60,
      backgroundColor: 'black',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: 'white',
      fontFamily: 'Montserrat_700Bold',
      fontSize: 20,
    },
});

export default signInStyles;