import { API_BASE } from '@env';
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// components
import QuantitySelector from "../components/QuantitySelector.js";

export default function ProductScreen({ route , navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { item } = route.params;

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE}/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    const handleQuantityChange = (newQuantity) => {
      console.log('New Quantity:', newQuantity);
      // You can update the cart or state here
    };

    return (
      <View style={productScreenStyles.container}>
        <ScrollView contentContainerStyle={productScreenStyles.scrollContent}>
          <View style={productScreenStyles.imageContainer}>
            <Image 
              style={productScreenStyles.image}
              source={{ uri: item.product__Image }}
            />
          </View>

          <View style={productScreenStyles.textContainer}>
            <Text style={productScreenStyles.productName}>
              {item.product__Name}
            </Text>
            
            <View style={productScreenStyles.ratingContainer}>
              <View style={productScreenStyles.ratingWrapper}>
                <Image 
                  style={productScreenStyles.star}
                  source={require('../assets/icons/star.png')}
                />
                <Text style={productScreenStyles.rating}>
                  {item.product__Rating}
                </Text>
              </View>
              <Text style={productScreenStyles.ratingCount}>
                ({item.product__Reviews}+)
              </Text>
              <Text style={productScreenStyles.reviews}>
                See reviews   
              </Text>
            </View>
            
            <View style={productScreenStyles.priceAndQuantityContainer}>
              <Text style={productScreenStyles.productPrice}>
                <Text style={productScreenStyles.dollarSign}>$</Text>
                {item.product__Price}
              </Text>
              <QuantitySelector 
                initialQuantity={1} 
                onQuantityChange={handleQuantityChange} 
              />
            </View>

            <Text style={productScreenStyles.productDescription}>
              {item.product__Description}
            </Text>
          </View>
        </ScrollView>

        {/* Add to Cart Button */}
        <TouchableOpacity 
          style={productScreenStyles.addToCartButton} 
          onPress={() => console.log('Added to Cart:', item.product__Name)}
        >
          <Text style={productScreenStyles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
}
const productScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Add space for the button
  },
  imageContainer: {
    marginTop: 45,
    width: "90%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 10,
    width: "90%",
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  star:{
    width: 15,
    height: 15,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  rating:{
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  ratingCount:{
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'Montserrat_400Regular',
    color: '#A8A8A8',
  },
  reviews:{
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'Montserrat_400Regular',
    color: '#FE8000',
    textDecorationLine: 'underline',
  },
  productPrice: {
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    color: '#FE8000',
  },
  dollarSign: {
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FE8000',
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
    color: '#A8A8A8',
    marginBottom: 20,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FE8000',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
  },
  scrollContent: {
    alignItems: 'center',
  },
});