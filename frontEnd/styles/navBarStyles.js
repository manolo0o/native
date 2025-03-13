import { StyleSheet } from 'react-native';

const navBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    bottom: 0,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default navBarStyles;