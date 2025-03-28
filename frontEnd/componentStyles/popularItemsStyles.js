import { StyleSheet } from "react-native";

const popularItemsStyles = StyleSheet.create({
  itemContainerButton:{
    backgroundColor: 'white',
    marginLeft: 20,
    width: 300,
    height: 210,
    borderRadius: 20,
  },
  image: {
    width: 300, 
    height: 140, 
    borderRadius: 20,
    resizeMode: 'cover', 
  },
  title:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 15,
  }
})

export default popularItemsStyles;
