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
});

export default signUpStyles;