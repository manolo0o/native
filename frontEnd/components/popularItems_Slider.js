import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import popularItemsStyles from '../componentStyles/popularItemsStyles.js';

export default function PopularItemsSlider() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://192.168.0.17:3000/products');
      const data = await response.json();
      console.log(data); // Verifica la estructura de los datos
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderedIProduct = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item.product__Image)}>
      <View style={popularItemsStyles.imageContainer}>
        <Image 
          style={popularItemsStyles.image}
          source={item.product__Image ? { uri: item.product__Image } : require('../assets/icon.png')}
        />
        <Text style={popularItemsStyles.price}>
          ${item.product__Price}
        </Text>
        <Text style={popularItemsStyles.rating}>
          ${item.product__Rating}
          <Image 
            style={popularItemsStyles.star}
            //source={require('')}
          />
          <Text style={popularItemsStyles.ratingCount}>
            (25+)
          </Text>
        </Text>
      </View>
      <Text>{item.product__Name}</Text>
      <Text>{item.product__Category}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  

  return (
    <View style={popularItemsStyles.sliderContainer}>
      <Text srtyle={popularItemsStyles.title}>Popular Items</Text>
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