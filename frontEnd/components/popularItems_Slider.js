import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import popularItemsStyles from '../componentStyles/popularItemsStyles.js';
import { API_BASE_URL } from '@env';

export default function PopularItemsSlider() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
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