import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import turnbackIcon from '../assets/icons/turnBack.png';
import NavBar from "../components/navBar.js";
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const renderCartItem = ({ item }) => {
    if (!item) return null; // Handle undefined or null items

    return (
      <View style={cartScreenStyles.cartItem}>
        {/* Product Image */}
        <Image 
          source={{ uri: item.product__Image }} 
          style={cartScreenStyles.cartItemImage} 
        />

        {/* Product Details */}
        <View style={cartScreenStyles.cartItemDetails}>
          <Text style={cartScreenStyles.cartItemName}>{item.product__Name}</Text>
          <Text style={cartScreenStyles.cartItemDescription}>{item.product__Category}</Text>
          <Text style={cartScreenStyles.cartItemPrice}>${item.product__Price.toFixed(2)}</Text>
          <Text style={cartScreenStyles.cartItemQuantity}>Quantity: {item.quantity}</Text>
          {item.comment ? (
            <Text style={cartScreenStyles.cartItemComment}>Comment: {item.comment}</Text>
          ) : null}
        </View>

        {/* Remove Button */}
        <TouchableOpacity 
          onPress={() => removeFromCart(item.id)} 
          style={cartScreenStyles.removeButton}
        >
          <Text style={cartScreenStyles.removeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={cartScreenStyles.container}>
      <View style={cartScreenStyles.HeaderTurnBack}>
        <TouchableOpacity 
          style={cartScreenStyles.turnBackButton} 
          onPress={() => navigation.goBack()}
        >
          <Image 
            style={cartScreenStyles.turnBackIcon} 
            source={turnbackIcon} 
          />
        </TouchableOpacity>
        <View style={cartScreenStyles.cartTextContainer}>
          <Text style={cartScreenStyles.cartText}>Cart</Text>
        </View>
      </View>
    
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          data={cartItems || []}
          renderItem={renderCartItem}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          ListEmptyComponent={
            <Text style={cartScreenStyles.emptyCartText}>Your cart is empty.</Text>
          }
        />
      </View>

      <NavBar navigation={navigation}/>
    </View>
  );
}

const cartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  HeaderTurnBack: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  turnBackButton: {
    width: 70,
    height: 70,
    marginLeft: 15,
    marginRight: 90,
  },
  turnBackIcon: {
    top: 7,
    width: '100%',
    height: '100%',
  },
  cartTextContainer: {},
  cartText: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
  },
  cartItem: {
    flexDirection: 'row', // Align image and details horizontally
    alignItems: 'center', // Vertically center the content
    marginBottom: 15, // Add spacing between items
    borderWidth: 1, // Add a border for better visibility
    borderColor: '#ddd', // Light gray border
    borderRadius: 10, // Rounded corners
    padding: 10, // Add padding inside the container
    backgroundColor: '#fff', // White background for visibility
    width: '95%', // Ensure the item takes up most of the screen width
    alignSelf: 'center', // Center the item horizontally
    shadowColor: '#000', // Add shadow for better visibility
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  cartItemImage: {
    width: 80, // Set the width of the image
    height: 80, // Set the height of the image
    borderRadius: 10, // Rounded corners for the image
    marginRight: 15, // Add spacing between the image and details
    backgroundColor: '#f0f0f0', // Add a background color to ensure visibility
  },
  cartItemDetails: {
    flex: 1, // Take up the remaining space
    justifyContent: 'center', // Center the text vertically
  },
  cartItemName: {
    fontSize: 16, // Larger font for the product name
    fontWeight: 'bold', // Bold text for emphasis
    marginBottom: 5, // Add spacing below the name
    color: '#000', // Ensure the text is visible
  },
  cartItemDescription: {
    fontSize: 14, // Smaller font for the description
    color: '#888', // Gray color for less emphasis
    marginBottom: 5, // Add spacing below the description
  },
  cartItemPrice: {
    fontSize: 14, // Standard font size for the price
    color: '#FE8000', // Orange color for visibility
    marginBottom: 5, // Add spacing below the price
  },
  cartItemQuantity: {
    fontSize: 14, // Standard font size for the quantity
    color: '#000', // Black color for visibility
    marginBottom: 5, // Add spacing below the quantity
  },
  cartItemComment: {
    fontSize: 12, // Smaller font for the comment
    color: '#555', // Dark gray color for less emphasis
  },
  removeButton: {
    backgroundColor: '#FF0000', // Red background for the remove button
    borderRadius: 10, // Rounded corners
    padding: 10, // Add padding inside the button
    justifyContent: 'center', // Center the text
    alignItems: 'center', // Center the text
  },
  removeButtonText: {
    color: '#fff', // White text for contrast
    fontWeight: 'bold', // Bold text for emphasis
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

