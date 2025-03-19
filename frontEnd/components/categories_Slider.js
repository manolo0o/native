import React, { useEffect, useState} from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import categorieStyles from "../componentStyles/categorieStyles.js";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const categorieItem = ({ item }) => {
      <View style={categorieStyles.categorieItem}>
        <Text style={categorieStyles.categorieText}>{item.product__Category}</Text>
      </View>
  };

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={categorieItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    );
}