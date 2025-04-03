import { API_BASE_URL } from '@env';
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
        const response = await fetch(`${API_BASE_URL}/products`);
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

          <Text style={productScreenStyles.productDescription}>{item.product__Description}</Text>
        </View>


      </View>
    );
}
const productScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
  textContainer:{ 
    width: "90%",
    marginTop: 5,
    padding: 10,
    borderRadius: 15,
  },
  ratingContainer:{
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Vertically center the items
    marginBottom: 5,
  },
  star:{
    width: 15,
    height: 15,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName:{
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold'
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
  productPrice:{
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    color: '#FE8000',
  },
  dollarSign:{
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FE8000',
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productDescription:{
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
    color: '#A8A8A8',
  },  
});