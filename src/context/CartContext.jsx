import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Stocker le total directement

  // Fonction pour recalculer le total
  const recalculateTotal = updatedCart => {
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  };

  // Fonction pour modifier la quantité
  const updateQuantity = (productId, amount) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0); // Supprimer les articles avec quantité 0

    setCart(updatedCart); // Mettre à jour le panier
    recalculateTotal(updatedCart); // Recalculer directement le total
  };

  const addToCart = product => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      updateQuantity(product.id, 1);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      recalculateTotal(newCart); // Recalculer après ajout
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
