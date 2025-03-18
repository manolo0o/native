import { StyleSheet } from "react-native";

const userHeaderStyles = StyleSheet.create({
    container: {
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      width: '100%',
      height: '10%',
    },
    textContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      height: '110%',
    },
    text: {
      fontSize: 16,
      color:'#8C9099',
    },
    textOrange: {
      fontSize: 16,
      color: '#FE8000',
    },      
});

export default userHeaderStyles;