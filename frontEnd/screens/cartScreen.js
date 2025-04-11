import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import turnbackIcon from '../assets/icons/turnBack.png';
import NavBar from "../components/navBar.js";
import QuantitySelector from '../components/QuantitySelector.js'; // Import QuantitySelector
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  if (!updateCartItemQuantity) {
    console.error("updateCartItemQuantity is not defined in CartContext. Verify its implementation.");
    return null; // Prevent rendering if the function is undefined
  }

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
        </View>

        {/* Actions Container */}
        <View style={cartScreenStyles.actionsContainer}>
          <TouchableOpacity 
            onPress={() => removeFromCart(item.id)} 
            style={cartScreenStyles.removeButton}
          >
            <Text style={cartScreenStyles.removeButtonText}>X</Text>
          </TouchableOpacity>
          <QuantitySelector
            initialQuantity={item.quantity} // Ensure initial quantity matches cart item
            onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, newQuantity)} // Update cart item quantity
          />
        </View>
      </View>
    );
  };

  const order = cartItems.reduce((sum, item) => sum + item.product__Price * item.quantity, 0);
  const delivery = 7.50;
  const total = order + delivery;

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

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <View style={cartScreenStyles.summaryContainer}>
          <View style={cartScreenStyles.summaryRow}>
            <Text style={cartScreenStyles.summaryLabel}>Order:</Text>
            <Text style={cartScreenStyles.summaryValue}>
              ${order.toFixed(2)} <Text style={cartScreenStyles.currencyText}>USD</Text>
            </Text>
          </View>
          <View style={cartScreenStyles.summaryRow}>
            <Text style={cartScreenStyles.summaryLabel}>Delivery:</Text>
            <Text style={cartScreenStyles.summaryValue}>
              ${delivery.toFixed(2)} <Text style={cartScreenStyles.currencyText}>USD</Text>
            </Text>
          </View>
          <View style={cartScreenStyles.summaryRow}>
            <Text style={cartScreenStyles.summaryLabel}>Total:</Text>
            <Text style={cartScreenStyles.summaryValue}>
              ${total.toFixed(2)} <Text style={cartScreenStyles.currencyText}>USD</Text>
            </Text>
          </View>
        </View>
      )}

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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cartItemName: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
    fontFamily: 'Montserrat_400Regular',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    fontFamily: 'Montserrat_400Regular',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#FE8000',
    marginBottom: 5,
    fontFamily: 'Montserrat_700Bold',
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: 70,
  },
  removeButton: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add spacing between removeButton and QuantitySelector
  },
  removeButtonText: {
    color: '#FE8000',
    fontFamily: 'Montserrat_400Regular',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  summaryContainer: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Add spacing between rows
  },
  summaryLabel: {
    fontSize: 17, // Slightly larger font for labels
    fontFamily: 'Montserrat_400Regular',
    color: '#000',
  },
  summaryValue: {
    fontSize: 20, // Larger font for values
    fontFamily: 'Montserrat_600SemiBold',
    color: '#000',
  },
  currencyText: {
    fontSize: 12, // Smaller font for "USD"
    fontFamily: 'Montserrat_400Regular',
    color: 'gray',
  },
});

