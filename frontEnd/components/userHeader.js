import React from "react";
import { View, Text, Image } from "react-native";
import userHeaderStyles from "../componentStyles/userHeaderStyles";

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