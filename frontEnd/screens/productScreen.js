import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import productScreenStyles from "../Styles/productScreenStyles.js";
import { API_BASE_URL } from '@env'; 
// components

export default function ProductScreen({ route , navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { item } = route.params;

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    // const handlePress = (category) => {
    //   setPressedItemCategory(category);
    // }

    return (
      <View style={productScreenStyles.container}>

        <View style={productScreenStyles.imageContainer}>
          <Image 
            style={productScreenStyles.image}
            source={{ uri: item.product__Image }}
          />
        </View>

        <View style={productScreenStyles.textContainer}>
          <Text style={productScreenStyles.productName}>{item.product__Name}</Text>
          <Text style={productScreenStyles.productDescription}>{item.product__Description}</Text>
        </View>

      </View>
    );
}