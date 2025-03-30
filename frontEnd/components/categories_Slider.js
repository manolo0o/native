import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import categorieStyles from "../componentStyles/categorieStyles.js";
import { API_BASE_URL } from '@env';

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressedItemCategory, setPressedItemCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handlePress = (category) => {
    setPressedItemCategory(category);
  };  

  const categorieItem = ({ item }) => (
    <TouchableOpacity
      style={item.product__Category === pressedItemCategory ? categorieStyles.categorieItemPressed : categorieStyles.categorieItem}
      key={item.product__Category}
      onPress={() => handlePress(item.product__Category)}
    >
      <Text 
        style={item.product__Category === pressedItemCategory ? categorieStyles.categorieTextPressed : categorieStyles.categorieText} 
      >
        {item.product__Category}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  
  return (
    <View style={categorieStyles.sliderContainer}> 
      <FlatList
        data={categories}
        renderItem={categorieItem}
        keyExtractor={item => item.product__Category}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={categorieStyles.Slider}
      />
    </View>
  );
}