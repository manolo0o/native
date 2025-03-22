import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import categorieStyles from "../componentStyles/categorieStyles.js";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressedItemCategory, setPressedItemCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/products');
      const data = await response.json();
      console.log(data); // Log the data to see its structure
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handlePress = (category) => {
    console.log('Pressed item category:', category);
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