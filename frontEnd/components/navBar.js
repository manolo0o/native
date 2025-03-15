import { useNavigationState } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import navBarStyles from '../componentStyles/navBarStyles.js';

export default function NavBar({ navigation }) {
  const [selectedIcon, setSelectedIcon] = useState('home');

  const icons = {
    home: {
      default: require('../assets/icons/homeBlack.png'),
      selected: require('../assets/icons/homeOrange.png')
    },
    order: {
      default: require('../assets/icons/ordersBlack.png'),
      selected: require('../assets/icons/ordersOrange.png')
    },
    cart: {
      default: require('../assets/icons/cartBlack.png'),
      selected: require('../assets/icons/cartOrange.png')
    }
  };

  // Update selected icon based on the current route
  const currentRoute = useNavigationState(state => state.routes[state.index].name);
  useEffect(() => {
    setSelectedIcon(currentRoute.toLowerCase());
  }, [currentRoute]);

  const handlePress = (iconType, screen) => {
    setSelectedIcon(iconType);
    navigation.navigate(screen);
  };

  return (
    <View style={navBarStyles.container}>
      <TouchableOpacity onPress={() => handlePress('home', 'Home')}>
        <Image
          style={navBarStyles.image}
          source={selectedIcon === 'home' ? icons.home.selected : icons.home.default}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('order', 'Order')}>
        <Image
          style={navBarStyles.image}
          source={selectedIcon === 'order' ? icons.order.selected : icons.order.default}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('cart', 'Cart')}>
        <Image
          style={navBarStyles.image}
          source={selectedIcon === 'cart' ? icons.cart.selected : icons.cart.default}
        />
      </TouchableOpacity>
    </View>
  );
}