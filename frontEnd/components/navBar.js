import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import navBarStyles from '../styles/navBarStyles.js';

export default function NavBar() {
  const [homeIcon, setHomeIcon] = useState(require('../assets/icons/homeBlack.png'));
  const [orderIcon, setOrderIcon] = useState(require('../assets/icons/ordersBlack.png'));
  const [cartIcon, setCartIcon] = useState(require('../assets/icons/cartBlack.png'));

  const changeIcon = (iconType) => {
    switch (iconType) {
      case 'home':
        setHomeIcon(prevIcon =>
          prevIcon === require('../assets/icons/homeBlack.png') ? require('../assets/icons/homeOrange.png') : require('../assets/icons/homeBlack.png')
        );
        break;
      case 'order':
        setOrderIcon(prevIcon =>
          prevIcon === require('../assets/icons/ordersBlack.png') ? require('../assets/icons/ordersOrange.png') : require('../assets/icons/ordersBlack.png')
        );
        break;
      case 'cart':
        setCartIcon(prevIcon =>
          prevIcon === require('../assets/icons/cartBlack.png') ? require('../assets/icons/cartOrange.png') : require('../assets/icons/cartBlack.png')
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={navBarStyles.container}>
      <TouchableOpacity onPress={() => changeIcon('home')}>
        <Image
          style={navBarStyles.image}
          source={homeIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeIcon('order')}>
        <Image
          style={navBarStyles.image}
          source={orderIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeIcon('cart')}>
        <Image
          style={navBarStyles.image}
          source={cartIcon}
        />
      </TouchableOpacity>
    </View>
  );
}