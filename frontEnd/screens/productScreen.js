import { API_URL_NEW } from '@env';
import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import turnbackIcon from '../assets/icons/turnBack.png';
import { CartContext } from '../context/CartContext';

// components
import QuantitySelector from "../components/QuantitySelector.js";

export default function ProductScreen({ route , navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { item } = route.params;
    const [comment, setComment] = useState(""); // State to store the comment
    const [quantity, setQuantity] = useState(1); // Track quantity
    const { addToCart } = useContext(CartContext); // Access addToCart function

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL_NEW}/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    const handleQuantityChange = (newQuantity) => {
      console.log('New Quantity:', newQuantity);
      setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
      addToCart(item, quantity, comment); // Add item to cart
      navigation.navigate('Cart'); // Navigate to the Cart screen
    };

    return (
      <View style={productScreenStyles.container}>
        <ScrollView contentContainerStyle={productScreenStyles.scrollContent}>
          <View style={productScreenStyles.imageContainer}>
            {/* Turn Back Icon */}
            <TouchableOpacity 
              style={productScreenStyles.turnBackButton} 
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
            >
              <Image 
                style={productScreenStyles.turnBackIcon} 
                source={turnbackIcon} 
              />
            </TouchableOpacity>

            {/* Product Image */}
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
            
            {/* Size and Delivery Time */}
            <View style={productScreenStyles.sizeAndDeliveryContainer}>
              {/* Product Size */}
              <View style={productScreenStyles.sizeContainer}>
                <Text style={productScreenStyles.sizeLabel}>Size</Text>
                <Text style={productScreenStyles.sizeValue}>{item.product__Size}</Text>
              </View>

              {/* Average Delivery Time */}
              <View style={productScreenStyles.deliveryContainer}>
                <Text style={productScreenStyles.deliveryLabel}>Delivery</Text>
                <Text style={productScreenStyles.deliveryValue}>{item.product__Avg_Delivery_Time} min</Text>
              </View>
            </View>

            {/* Comment Input */}
            <TextInput
              style={productScreenStyles.commentInput}
              placeholder="Add a comment for your order..."
              placeholderTextColor="#A8A8A8"
              value={comment}
              onChangeText={(text) => setComment(text)}
              multiline
            />

          </View>
        </ScrollView>


        {/* Add to Cart Button */}
        <TouchableOpacity 
          style={productScreenStyles.addToCartButton} 
          onPress={handleAddToCart}
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
  sizeAndDeliveryContainer: {
    flexDirection: 'row', // Align the two containers horizontally
    justifyContent: 'space-between', // Add space between the two containers
    marginBottom: 10, // Reduce spacing below the container
    width: '70%',
  },
  sizeContainer: {
    flex: 0.45, // Reduce the width of the container (45% of the row)
    alignItems: 'flex-start', // Align content to the start
    flexDirection: 'column', // Stack label and value vertically
    borderWidth: 1, // Add border
    borderColor: '#FE8000', // Border color
    borderRadius: 10, // Rounded corners
    padding: 10, // Add padding inside the container
    marginRight: 5, // Add spacing between the two containers
  },
  deliveryContainer: {
    flex: 0.45, // Reduce the width of the container (45% of the row)
    flexDirection: 'column', // Stack label and value vertically
    borderWidth: 1, // Add border
    borderColor: '#FE8000', // Border color
    borderRadius: 10, // Rounded corners
    padding: 10, // Add padding inside the container
  },
  sizeLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FE8000',
  },
  sizeValue: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
    marginTop: 5, // Add spacing between label and value
  },
  deliveryLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FE8000',
  },
  deliveryValue: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
    marginTop: 5, // Add spacing between label and value
  },
  commentInput: {
    borderWidth: .3,
    height: 100,
    borderColor: '#A8A8A8',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    color: '#000',
    marginTop: 10,
    marginBottom: 20,
    textAlignVertical: 'top', // Align text to the top of the TextInput
  }, 
  turnBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  turnBackIcon: {
    width: 80,
    height: 80,
  },
});