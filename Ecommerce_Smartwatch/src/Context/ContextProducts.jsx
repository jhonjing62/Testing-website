import React, { createContext, useContext, useState } from "react";
import ProductData from "../Data/ProductData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(ProductData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};