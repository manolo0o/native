import { StyleSheet } from "react-native";

const categorieStyles = StyleSheet.create({
  sliderContainer:{
    marginBottom: 20,
  },
  categorieItem: {
    padding: 12,
    marginLeft: 20,
    borderColor: '#FE8000',
    borderWidth: 1, 
    borderRadius: 11,
    backgroundColor: '#fff',
  },
  categorieText: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  categorieItemPressed: {
    backgroundColor: '#FE8000',
    padding: 12,
    marginLeft: 20,
    borderColor: '#FE8000',
    borderWidth: .5, 
    borderRadius: 11,
  },
  categorieTextPressed: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
  }
});

export default categorieStyles;