import { StyleSheet } from "react-native";

const categorieStyles = StyleSheet.create({
  categorieItem: {
    padding: 10,
    marginLeft: 20,
    borderColor: '#FE8000',
    borderWidth: 1, 
    borderRadius: 11,
  },
  categorieText: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  categorieItemPressed: {
    backgroundColor: '#FE8000',
    padding: 10,
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