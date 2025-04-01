import { StyleSheet } from "react-native";

const userHeaderStyles = StyleSheet.create({
    container: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      width: '100%',
      height: '10%',
      marginBottom: 20,
    },
    textContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    text: {
      color:'#8C9099',
      fontFamily: 'Montserrat_400Regular', 
    },
    textOrange: {
      color: '#FE8000',
      fontFamily: 'Montserrat_400Regular', 
    },      
});

export default userHeaderStyles;