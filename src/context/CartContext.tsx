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
import { toast } from "sonner";

export type CartItem = Product & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  totalItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // ✅ SSR zamanı səhvlərin qarşısını alır
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ İlk yüklənmə zamanı localStorage-dan oxuma
  useEffect(() => {
    if (!isClient) return;

    try {
      const storedCart = localStorage.getItem("shalala_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.warn("LocalStorage oxuma xətası:", error);
    }
  }, [isClient]);

  // ✅ iPhone/Safari-də crash olmaması üçün təhlükəsiz yazma
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      try {
        localStorage.setItem("shalala_cart", JSON.stringify(cartItems));
      } catch (error) {
        console.warn("LocalStorage yazma xətası:", error);
      }
    }, 300); // 300ms gecikmə ilə yazmaq daha sabit olur

    return () => clearTimeout(timer);
  }, [cartItems, isClient]);

  // ✅ Məhsul əlavə et
  const addToCart = (product: Product, quantity: number) => {
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

    toast.success(`"${product.title}" səbətə əlavə olundu`, { duration: 2000 });
  };

  // ✅ Məhsul sil
  const removeFromCart = (productId: number) => {
    let removedItemTitle = "";
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) removedItemTitle = itemToRemove.title;
      return prevItems.filter((item) => item.id !== productId);
    });

    if (removedItemTitle) {
      toast.error(`"${removedItemTitle}" səbətdən silindi`, { duration: 2000 });
    }
  };

  // ✅ Miqdarı dəyiş
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

  // ✅ Ümumi məhsul sayı
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
    throw new Error(
      "useCart mütləq CartProvider daxilində istifadə olunmalıdır"
    );
  }
  return context;
};
