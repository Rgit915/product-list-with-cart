"use client";

import { createContext, useState, useContext } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart and manage quantities
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        // If the item exists, increment its quantity
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // If the item doesn't exist, add it with quantity 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // removeFromCart function to remove the item entirely
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.name !== itemName));
  };

  // Function to remove or decrement item from the cart
  const decrementQuantity = (itemName) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === itemName);

      if (existingItem && existingItem.quantity > 1) {
        // Decrease the quantity but don't remove the item entirely
        return prevItems.map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }

      // If the quantity is 1, remove the item
      return prevItems.filter((cartItem) => cartItem.name !== itemName);
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]); // Set cartItems to an empty array
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
