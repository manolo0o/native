import { StyleSheet } from "react-native";

const popularItemsStyles = StyleSheet.create({
  itemContainerButton:{
    backgroundColor: 'white',
    marginLeft: 20,
    width: 300,
    height: 210,
    borderRadius: 20,
  },

  imageContainer: {
    position: 'relative', // Permite posicionar elementos dentro de este contenedor
    overflow: 'hidden', // Asegura que los elementos no se salgan del borde redondeado
  },
  image: {
    width: 300, 
    height: 140, 
    borderRadius: 20,
    resizeMode: 'cover', 
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // Coloca price arriba y rating abajo
    padding: 10, // Espaciado interno
  },
  
  price: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: 'black',
    backgroundColor: 'rgb(255, 255, 255)', // Fondo semitransparente
    padding: 5,
    borderRadius: 20,
    alignSelf: 'flex-start', // Alineado a la izquierda
  },
  dollarSign:{
    color: '#FE8000',
  },
  
  rating: {
    fontSize: 14,    
    color: 'black',
    backgroundColor: 'rgb(255, 255, 255)', // Fondo semitransparente
    padding: 5,
    borderRadius: 20,
    alignSelf: 'flex-start', // Alineado a la izquierda
  },
  ratingCount: {
    fontSize: 10,
    color: 'gray',
    fontFamily: 'Montserrat_400Regular',
  },

  title:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 15,
  },

  textContainer:{
    padding: 10,
    justifyContent: 'center',
    height: 70,
  },
  productName:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 13,
  },
  productCategory:{
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
})

export default popularItemsStyles;
