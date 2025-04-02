import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { API_BASE_URL_2 } from '@env';
//import { API_BASE_URL } from '@env';


export default function PopularItemsSlider() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL_2}/products`);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderedIProduct = ({ item }) => (
    
    <TouchableOpacity style={popularItemsStyles.itemContainerButton}>
    
      <View style={popularItemsStyles.imageContainer}>
        
        <Image 
          style={popularItemsStyles.image}
          source={item.product__Image ? { uri: item.product__Image } : require('../assets/icon.png')}
        />

        <View style={popularItemsStyles.overlay}>
          <Text style={popularItemsStyles.price}>
            <Text style={popularItemsStyles.dollarSign}>$</Text>
            {item.product__Price}
          </Text>
          <Text style={popularItemsStyles.rating}>
            {item.product__Rating}
            <Image 
              style={popularItemsStyles.star}
              source={require('../assets/icons/star.png')}
              />
            <Text style={popularItemsStyles.ratingCount}>
              (25+)
            </Text>
          </Text>
        </View>
      
      </View>

      <View style={popularItemsStyles.textContainer}>
        <Text style={popularItemsStyles.productName}>{item.product__Name}</Text>
        <Text style={popularItemsStyles.productCategory}>{item.product__Category}</Text>
      </View>

    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  

  return (
    <View style={popularItemsStyles.sliderContainer}>
      <Text style={popularItemsStyles.title}>Popular Items</Text>
      <FlatList 
        data={items}
        renderItem={renderedIProduct}  
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={popularItemsStyles.Slider}
      />
    </View>
  );
}

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