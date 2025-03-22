import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import categorieStyles from "../componentStyles/categorieStyles.js";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const categorieItem = ({ item }) => (
      <View style={categorieStyles.categorieItem} key={item.id ? item.id.toString() : Math.random().toString()}>
        <Text style={categorieStyles.categorieText}>{item.product__Category}</Text>
      </View>
  );

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  
  return (
    <View style={categorieStyles.sliderContainer}> 
      <FlatList
        data={categories}
        renderItem={categorieItem}
        keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}
        horizontal
        style={categorieStyles.Slider}
      />
    </View>
  );
}