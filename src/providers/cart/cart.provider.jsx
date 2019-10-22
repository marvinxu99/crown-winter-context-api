import React, { createContext, useState, useEffect } from 'react';

import { 
  addItemToCart, 
  removeItemFromCart, 
  getCartItemsCount 
} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () =>{},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemCount: 0,
    calculateTotal: () => {},
  });
  
 const CartProvider = ({ children }) => {
    const [ hidden, setHidden ] = useState(true);
    const [ cartItems, setCartItems] = useState([]);
    const [ cartItemsCount, setCartItemsCount ] = useState(0);

    const getCartItemsCount = () => (
      cartItems.length ? 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
          accumulatedQuantity + cartItem.quantity, 0)
        :
        0    
    );

    const addItem = item => setCartItems(addItemToCart(cartItems, item));

    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));

    const clearItemFromCart = item =>
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));

    const calculateTotal = () => cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 0);

    const toggleHidden = () => setHidden(!hidden);

    // Calculte the count whenever there is an update on cart items
    useEffect(() =>{
      setCartItemsCount(getCartItemsCount(cartItems));
    }, [cartItems]);

    return (
      <CartContext.Provider 
        value={{
          hidden,
          toggleHidden,
          cartItems,
          addItem,
          removeItem,
          cartItemsCount,
          clearItemFromCart,
          calculateTotal
        }}
      >
        { children }
      </CartContext.Provider>
    );
 }

 export default CartProvider;
