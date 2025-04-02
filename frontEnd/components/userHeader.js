import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//image 
import iconImage from '../assets/icons/Group17484.png';

export default function UserHeader() {

  return( 
    <View style={userHeaderStyles.container}>
        <Image
          style={userHeaderStyles.image}
          source={iconImage}
        />
        <View style={userHeaderStyles.textContainer}>
          <Text style={userHeaderStyles.text}>Deliver to</Text>
          <Text style={userHeaderStyles.textOrange}>4057 Mattson Street</Text>
        </View>
        <Image
          style={userHeaderStyles.image}
          source={iconImage}
        />
    </View>
    );
};

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
