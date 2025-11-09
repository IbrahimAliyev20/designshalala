"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/utils/product"; // Sizin product tipiniz
import { toast } from "sonner"; // Gözəl bildirişlər üçün

// Səbət məhsulunun tipini təyin edirik
export type CartItem = Product & {
  quantity: number;
};

// Kontekstin nə təqdim edəcəyini təyin edirik
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  totalItemCount: number;
}

// Konteksti yaradırıq
const CartContext = createContext<CartContextType | undefined>(undefined);

// Kontekst Provider (Təminatçı) komponenti
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Səhifə yüklənəndə datanı localStorage-dan oxu
  useEffect(() => {
    const storedCart = localStorage.getItem("shalala_cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Səbət dəyişəndə datanı localStorage-a yaz
  useEffect(() => {
    // Yalnız "mount" (ilk yüklənmə) bitdikdən sonra localStorage-a yaz
    // Bu, həm də ilkin yükləmədəki "hydration mismatch" problemini həll edir
    if (cartItems.length > 0 || localStorage.getItem("shalala_cart")) {
       localStorage.setItem("shalala_cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Səbətə məhsul əlavə etmə funksiyası (DÜZƏLDİLMİŞ)
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Əgər məhsul artıq səbətdə varsa, sayını artır
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Əgər yoxdursa, yeni məhsul kimi əlavə et
        return [...prevItems, { ...product, quantity }];
      }
    });

    // DƏYİŞİKLİK: Toast bildirişi state yeniləməsindən
    // KƏNARDA, 1 dəfə çağırılır.
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

  // Məhsul sayını dəyişmə funksiyası (məsələn: +1 və ya -1)
  const updateQuantity = (productId: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0) // Sayı 0-a düşərsə sil
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

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart mütləq CartProvider daxilində istifadə olunmalıdır");
  }
  return context;
};