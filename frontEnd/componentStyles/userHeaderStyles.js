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
      color:'#8C9099',
      fontFamily: 'Montserrat_400Regular', 

    },
    textOrange: {
      color: '#FE8000',
      fontFamily: 'Montserrat_400Regular', 
    },      
});

export default userHeaderStyles;