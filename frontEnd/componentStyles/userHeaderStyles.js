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
      color: 'grey',
    },
    textOrange: {
      fontSize: 16,
      color: 'orange',
    },      
});

export default userHeaderStyles;