"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
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
  
  // DƏYİŞİKLİK 1: Cihazın "client" olduğunu təsdiqləmək üçün state
  const [isClient, setIsClient] = useState(false);

  // DƏYİŞİKLİK 2: Səhifənin artıq client-də olduğuna əmin oluruq
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Səhifə yüklənəndə datanı localStorage-dan oxu
  useEffect(() => {
    // DƏYİŞİKLİK 3: YALNIZ client-də olduğumuza əmin olduqdan sonra localStorage-ı oxuyuruq
    if (isClient) {
      const storedCart = localStorage.getItem("shalala_cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, [isClient]); // Artıq [isClient]-dən asılıdır

  // Səbət dəyişəndə datanı localStorage-a yaz
  useEffect(() => {
    // DƏYİŞİKLİK 3: YALNIZ client-də olduğumuza əmin olduqdan sonra localStorage-a yazırıq
    if (isClient) {
      localStorage.setItem("shalala_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]); // isClient-dən asılıdır

  // Səbətə məhsul əlavə etmə funksiyası
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

    toast.success(`"${product.title}" səbətə əlavə olundu`);
  };

  // Səbətdən məhsul silmə funksiyası
  const removeFromCart = (productId: number) => {
    let removedItemTitle = "";
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) {
        removedItemTitle = itemToRemove.title;
      }
      return prevItems.filter((item) => item.id !== productId);
    });

    if (removedItemTitle) {
      toast.error(`"${removedItemTitle}" səbətdən silindi`);
    }
  };

  // Məhsul sayını dəyişmə funksiyası
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

  // Header-da göstərmək üçün ümumi məhsul sayı
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
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

// Konteksti asan istifadə etmək üçün xüsusi hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart mütləq CartProvider daxilində istifadə olunmalıdır");
  }
  return context;
};