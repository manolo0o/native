import { StyleSheet } from 'react-native';

const signUpStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSignUp: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'start',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
    },
    containerSignUp: {
      flex: 1,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'start',
    },
    title: {
      fontSize: 40,
      color: 'Black',
      fontFamily: 'Montserrat_700Bold',
      marginBottom: 35,
    },
    inputReference:{
        color: 'Black',
        opacity: 0.4,
        fontFamily: 'Montserrat_400Regular',
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
      fontFamily: "Montserrat_400Regular",
    },
    inputFocused: {
      borderColor: '#FE8000', // Change border color when focused
      borderWidth: 1,
    },
    ButtonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    signUpButton: {
      width: '80%',
      height: 60,
      backgroundColor: '#FE8000',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 35,
    },
    signUpButtonText: {
      color: 'white',
      fontFamily: 'Montserrat_400Regular',
      fontSize: 20,
    },
    loginRedirection: {
      color: 'Black',
      fontFamily: 'Montserrat_400Regular',
    },
    orangeText: {
      color: '#FE8000',
      fontFamily: 'Montserrat_400Regular',
    },
});

export default signUpStyles;