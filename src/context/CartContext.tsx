"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { Product } from "@/utils/product";

export type CartItem = Product & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, showToast?: (title: string) => void) => void;
  removeFromCart: (productId: number, showToast?: (title: string) => void) => void;
  updateQuantity: (productId: number, change: number) => void;
  totalItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    try {
      const storedCart = localStorage.getItem("shalala_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.warn("LocalStorage read error:", error);
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      try {
        localStorage.setItem("shalala_cart", JSON.stringify(cartItems));
      } catch (error) {
        console.warn("LocalStorage write error:", error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [cartItems, isClient]);

  const addToCart = (product: Product, quantity: number, showToast?: (message: string) => void) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    if (showToast) {
      showToast(product.title);
    }
  };

  const removeFromCart = (productId: number, showToast?: (message: string) => void) => {
    let removedItemTitle = "";
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) removedItemTitle = itemToRemove.title;
      return prevItems.filter((item) => item.id !== productId);
    });
    if (showToast && removedItemTitle) {
      showToast(removedItemTitle);
    }
  };

  const updateQuantity = (productId: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
