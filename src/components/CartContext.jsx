import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(()=>{

   const savedCart = localStorage.getItem("cart");
   
    return savedCart ? JSON.parse(savedCart) : {};
  });

  function handleUpdateCart(product) {
    setCart(prevCart => {
      const newCart = { ...prevCart };

      if (product.quantity > 0) {
        newCart[product.id] = { 
           ...(newCart[product.id] || {}),
          name: product.name, 
          price: product.price/100, 
          quantity: product.quantity 
        };
      } else {
        delete newCart[product.id]; 
      }

      console.log("Updated Cart:", newCart); 
      
        localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }



  return (
    <>
    <CartContext.Provider value={{ cart, handleUpdateCart }}>
      {children}
    </CartContext.Provider>
    
    </>
  );
}
