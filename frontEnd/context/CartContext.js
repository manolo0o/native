import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity, comment) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { ...item, id: item.id || new Date().getTime(), quantity, comment },
    ]);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};