import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../constants/products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for( let i = 1; i < PRODUCTS.length +1 ; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopingContextProvider= (props) => {
  const [cartItems,setCartItems] = useState(getDefaultCart());

  const getTotalCart = () => {
    let totalCart = 0
    for( const item in cartItems) {
        if( cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
            totalCart += cartItems[item] * itemInfo.price
        }
    }

    return totalCart;
  }

  const updateCartItemCount = (newAmount,itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:newAmount}))
  }
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
  }

  const contextValue = {cartItems,addToCart,removeFromCart,getTotalCart,updateCartItemCount}
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
